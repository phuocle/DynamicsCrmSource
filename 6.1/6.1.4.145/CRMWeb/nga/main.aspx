<!-- 
Template for a page which can execute server side code. This page is loaded as part of the authentication flow and can be used to get 
additional information from the server which are not available through the SDK.

NOTE: This page is loaded in both tablet and phone clients, and therefore any changes made here
should be verified to work in both these apps.
-->
<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript">
            window.onload=function() {
                if (window.parent) {
                    window.parent.authenticatedPageLoaded();
                }
            }
        </script>
    </head>
</html>