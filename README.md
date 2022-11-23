
# The Twelwth Lab


### Description: 

BONUS (React.js): Sign Up & Login pages

-  Extra tasks for highly interested in Frontend development students. This work is more complicated than others, so stay strong - the reward is worth it ;)


### Requirements:

- All of the requirements for previous React.js works should be kept.

- From this point, only Login and Registration pages are available for everyone. All your previous pages (Home/Catalog/Cart etc.) should be available only for logged in users.
Hint: Use ProtectedRoute Pattern:
https://dev.to/pprathameshmore/protected-routes-in-react-js-216i

- Check the value inside LocalStorage before letting the user access protected pages. If the value is invalid/empty - redirect him to the Login page.

- After user successfully authorizes (via login/registration) - store his credentials (email) inside LocalStorage. For consequent login/registration pages visits just check whether the value exists in LocalStorage and if it is - redirect the user to any protected page (i.e Home page).

- Sign out option just has to clear the LocalStorage value (and of course redirect to /login). This action could be made just as simple “Sign me out” Button.
Keep the authentication process simple - there is no need to implement the backend part, only /login & /register endpoints with mocked response is enough.










	







