/*
	List of aliases. An alias maps one or more virtual recipients to a 
	canonical recipient address. 
	
	Aliases are mostly useful if the POP3 service is enabled.
	
	For more information on the individual configuration elements see the 
	Javadoc documentation in the doc/javadoc directory. For an overview read
	the documentation in the doc directory.  
*/
aliases = [
	
	/*
		Postmaster aliases
		
		Uncomment and enter a - preferably local - mailbox address which
		will be the alias of both the server-wide "Postmaster" and the
		domain 	specific "Postmaster@..." addresses for the domains
		specified in the localDomains field.
	/*
	setup(PostmasterAliasMapper, {
		localDomains: localDomains,
		canonical: "john@example.com"
	}),
	*/
	
	/*
	setup(AliasMapper, {
			aliases: [
				"john1@example.com",
				"john2@example.com"
			],
			canonical: "john.doe@example.com"
	})
	*/	
];
