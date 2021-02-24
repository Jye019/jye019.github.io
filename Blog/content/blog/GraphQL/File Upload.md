---
title: Apollo Server에서 File Upload 하는 방법
date: "2021-02-03"
description: "with Apollo Server"
---

## Apollo Server 
---
Apollo Server 2.x부터는 File upload를 하기 위해 `graphql-upload` 모듈이 필요하다. 

> https://www.npmjs.com/package/graphql-upload

Apollo sever는 기존에 default로 upload 기능을  지원하고 있었기 때문에 `graphql-upload`를 사용하기 위해서는 Apollo server를 생성할 때 `uploads:false` 옵션을 추가해야 한다. 

```js
const server = new ApolloServer({
  resolvers,
  uploads: false,
  // ...other Apollo Server Setting
})
```
<br/>  

## Schema 
---
<br/>  

### typeDefs  

file은 `graphql-upload`의 `FileUpload` 타입으로 받고,
return type으로 `UploadedFileResponse`를 지정했다.   
또한 `graphql-upload`를 사용하기 위해 graphql의 `scalar` type으로 `Upload`를 추가해야한다.

```js
import { gql } from 'apollo-server-express'
import { GraphQLUpload, FileUpload } from 'graphql-upload'

export const typeDefs = gql`
	scalar Upload

	type UploadedFileResponse {
		filename: String!
		mimetype: String!
		encoding: String!
		path: String!
	}

	extend type Mutation {
		singleUpload(file: Upload!): UploadedFileResponse!
	}
`
```
<br/>

### resolver
resolver에도 `Upload: GraphQLUpload`을 추가한다.
```js
export const resolvers = {
	Upload: GraphQLUpload,
	Mutation: {
		singleUpload: async (_: unknown, { file }: { file: FileUpload }): Promise<UploadedFileResponse> => {
			// 파일 업로드 구현 
			const fileHandler = new FileHandler()
			const upload = await fileHandler.processUpload(file)
			return upload
		},
	},
}
```

<br/>

## util 
---
파일을 디렉토리에 업로드하기 위해 `fs` 모듈을 사용한다.  

```js
import { createWriteStream, mkdir } from 'fs'
import { FileUpload } from 'graphql-upload'

export type UploadedFileResponse = {
	filename: string
	mimetype: string
	encoding: string
	path: string
}

export class FileHandler {
	private static async storeUpload(upload: FileUpload): Promise<UploadedFileResponse> {
		return await new Promise((resolve, reject) => {
			upload
				.createReadStream()
				.pipe(createWriteStream(`${__dirname}/../../../files/images/${upload.filename}`))
				.on('error', reject)
				.on('finish', () => resolve({ ...upload, path: `/files/images/${upload.filename}` }))
		})
	}

	async processUpload(upload: FileUpload): Promise<UploadedFileResponse> {
		mkdir(`${__dirname}/../../../files/images/`, { recursive: true }, (err) => {
			if (err) throw err
		})
		const { createReadStream, filename, mimetype, encoding } = await upload

		const file = await FileHandler.storeUpload({ createReadStream, filename, mimetype, encoding })
		return file
	}
}
```


<br/>

---
#### reference

[File uploads in Node.js < v8.5.0](https://www.apollographql.com/docs/apollo-server/migration-file-uploads/)  
[☝️ GraphQL File Uploads with React Hooks, TypeScript & Amazon S3 [Tutorial]](https://www.apollographql.com/blog/graphql-file-uploads-with-react-hooks-typescript-amazon-s3-tutorial-ef39d21066a2/)