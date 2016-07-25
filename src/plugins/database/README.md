Wreck - set token bearer

let tokenBearer = 'bearer ' + request.auth.credentials.token;

{headers: {'Authorization': tokenBearer}}

------------------------------------------
-------------------------------------------