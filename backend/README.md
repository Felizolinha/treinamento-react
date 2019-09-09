# Rotas

## POST /login

**Body:** username, password
**Returns:** JSON -> {
User ID (string)
}
**Response Codes:** 200(Success), 401(wrong username or password)

## POST /signup

**Body:** username, password
**Returns:** JSON -> {
User ID (string)
}
**Response Codes:** 201(Account Created), 401(Server understood, but refused to create the account)

## PUT /account

**Body:** username, oldPassword, newPassword
**Returns:** Nothing
**Response Codes:** 204(Successfully updated login), 401(wrong username or password), 500(Failed to save changes on database)

## DELETE /account

**Query:** username, password
**Returns:** Nothing
**Response Codes:** 204(Success), 401(wrong username or password), 500(An error occurred during deletion)
