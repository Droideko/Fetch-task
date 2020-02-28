# Fetch-task

You would like to add the ability to render comments on a previously static website. The
comments are submitted only via a mobile app, so the website itself just needs to display the
latest comments. Comments should be fetched on the client (browser) side and then displayed
inside all tags that have the class 'comment-list' (there can be more than one such tag). All of
these elements will have a 'data-count' attribute determining the number of comments to fetch.

The comment data for this tag can be obtained by making an AJAX call to the follwing endpoint.

While the comments are being loaded, the 'comment-list' elements should be filled with the text
'Loading...'
