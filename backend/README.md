# Rotas
## GET /login
**Query:** username, password
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
**Query:** username, oldPassword, newPassword
**Returns:** Nothing
**Response Codes:** 204(Successfully updated login), 401(wrong username or password)

## DELETE /account
**Query:** username, password
**Returns:** Nothing
**Response Codes:** 204(Success), 401(wrong username or password)