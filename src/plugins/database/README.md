Bugs:
1. When deleting course, doesn't delete some of the subordinate tables like: course-materials, topics and coursist_topics











------------------------------------------
-------------------------------------------


Wreck - set token bearer

let tokenBearer = 'bearer ' + request.auth.credentials.token;

{headers: {'Authorization': tokenBearer}}

------------------------------------------
-------------------------------------------

Various Input Objects
{
	first_name:"Simeon", 
	last_name:"Kirkorov", 
	email:"simeon@simeon.com", 
	password:"azsymsimeon"
	role:"admin"
}

Admin - Simeon Kirkorov: 
bearer U2FsdGVkX185JuJ70Oq38E0Y4Ip96ozN2/kHBGkL2lwUQtbSfdOoVA72oFCvAQL9lYcIJdrNvOuOHt37UtQRUaqEuHKCuyeVS9o35/j4EMo6vhA2sx13yIQDg9ZSZsVc

Teacher - Mitko Kirkorov
bearer U2FsdGVkX19TXtCJS5aJ/j0VcgJpvTmEd9PkHC9767UCUQHWGlvpJ/GRhq12Mq7lFjTlOsoLTttIzJ4R82/3o/EHQ9+PPj5FWv8q8C3lRVnTRpaaD/Xmg36ufJ+epvkI

Student - Gosho Goshev:
bearer U2FsdGVkX1+a9LFKtSlk/BdLhCGDV4va7Y0tb3cf9A0aW2W5YQ1XQQLGO1/iXQDHu3kmEmqluVlwl9AEo7/2BWJWKkPRfjsZ+X0cMK7Ua1HN3z6nohZ4aAhpbcxs2U5a

------------------------------------------
-------------------------------------------