# Web Worker example

Life before Web-Workers,

JavaScript is single-threaded. As a result, long-lasting computations (not necessarily due to poorly written code) will block the UI thread and make it impossible to add text to text boxes, click buttons, use CSS effects, and, in most browsers, open new tabs until control has returned. This is bad for user experience(UX) and leads to frustrated for Users.

An answer to that problem is, 

"HTML5 Web Workers"

Web workers provide background-processing capabilities to web applications and typically run on separate threads so that JavaScript applications using Web Workers can take advantage of multicore CPUs.Web workers are in external files.They do not have access to the following JavaScript objects:
1.The window object
2.The document object
3.The parent object
HTML5 is the fifth and current major version of the HTML standard.
HTML 5 was first released in public-facing form on 22 January 2008,with a major update and "W3C Recommendation" status in October 2014. More details on https://en.wikipedia.org/wiki/HTML5

more at - https://medium.com/@bhargavshah2011/overview-of-web-worker-service-worker-56082720dcd0
