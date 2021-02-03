---
title: GraphQL에서 File Upload 하는 방법
date: "2021-02-03"
description: "with Apollo Server"
---

## Schema

Apollo Server는 default로 file upload를 지원한다. `Upload` type을 type definition에 추가하는 것만으로 file을 받을 수 있다. 

`Upload` type으로 front에서 넘어온 데이터는 stream 데이터로, 이를 서버에 저장할 수 있다. 

### typeDefs

```js
export const typeDefs = gql`
	type UploadedFileResponse {
		filename: String!
		mimetype: String!
        encoding: String!
        path: String!
	}

	type Query {
		uploads: [UploadedFileResponse]
	}

	type Mutation {
		singleUpload(file: Upload!): UploadedFileResponse!
	}
`
```

<br/>  

---
#### reference

[☝️ GraphQL File Uploads with React Hooks, TypeScript & Amazon S3 [Tutorial]](https://www.apollographql.com/blog/graphql-file-uploads-with-react-hooks-typescript-amazon-s3-tutorial-ef39d21066a2/)