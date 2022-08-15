
**GINQO QlikSense Field Scrambler** is a bookmarklet to scramble any field value of your QlikSense app using javascript and [QlikSense Engine Scramble API](https://qlik.dev/apis/json-rpc/qix/doc#%23%2Fentries%2FDoc%2Fentries%2FScramble)  without making external calls to any server on every modern browser.
	
Scrambles a field so the data is not recognizable. Some properties are retained to help debugging. For example, special characters are not changed, and small numbers are scrambled to another small number.

Update access is required to use the function in Qlik Sense Enterprise.


**About bookmarklet**

A [bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet) is like a bookmark, but instead of loading a specific page, it injects JavaScript into the current page in your browser for added functionality. 


**Installation** 

Installation of this bookmarklet is performed by creating a new bookmark, and pasting the bookmarklet.js code above into the URL destination field. 
Or go to [https://ginqo.com/scramble](https://ginqo.com/scramble) and drag the button to your bookmarks bar.


**Important Note**  
-   You can use this tool with published or un-published app, as long as you have access to Edit the app.
-   Scrambled data is TEMPORARY, it will back to the original value after a while or after you RELOAD the app. If you want to keep the scrambled data, as a workaround you have to duplicate the app after scrambling. Important is, that you do not close the session in which you have scrambled bevor duplicating the app.
-   Scrambled field values only available to you. Data for other users remain to the ORIGINAL value.
-   Before installing a Bookmarklet, make sure your browser’s bookmarks toolbar is visible.
-   To remove a Bookmarklet, simply right click on it and hit delete.
-   The bookmarklet code (bookmarklet.js) was simplifed from source.js using https://www.digitalocean.com/community/tools/minify and converted to bookmarklet using https://caiorss.github.io/bookmarklet-maker/

**How to use**
-   Open a QlikSense app sheet whether its on QlikCloud or on-premise
-   Click on the "Scramble Field" bookmarklet
-   Values of the field will be scrambled right away without refresh.

**Known limitations**
-   You must add at least one extension object to the sheet before execute the scramble bookmark. ([Open Issue#1](https://github.com/rikiginqo/qliksense-field-scrambler/issues/1))
-   Works on Chrome, Edge and Firefox. Internet Explorer and Safari are not supported.



**v.1.0 (2022-08-15)**
-   Initial release
