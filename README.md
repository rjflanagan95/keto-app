![Screenshot of Keto App](https://lh3.googleusercontent.com/Tz-JHMrm-VLsXYOMHCA3qdtXpyPQd5zyJgV0v2SBb37jye9s-Rb3eJZ63D05JA2f1Ruc6UMpA5OJN2JB_epH8jWPRqe4DQUCuO_3wW9Odgc1v9_0zNBKCkFlq7g9nGJmjfaeXd5I9wycm6a4K_cFHL1g8FE4IYDha4KXV_Rtqy3gzv8Y2aBDIp6bONIcAKHb0BUM4d2r_c08wcjTs2SvCzoU4XGvDRGIPW4TBYHTbTbV8uhrStmzwsHXtEYk8zYZYC45ESpc9Vr-1cyH6L-gVSCf3kQMa2kXdckYxff_o3xfNhA-zaCdQF04rlnmBCR6vlIewHY_CHlgq7uA5ebRzqnKcqXNw8X7McMiZkVDGFb6QlqA0dwg7A8vvH9yjkuK8-5I2iSBkA1Oyv3XWUIl7Igxv2tezvSR-m34CesBsgAf91gpugA4tof9dyVS_KxalZsjrIgfWm87gajxm96Q-Yfn7qhNjtgNpKRwA_2Onpu-vR09xF8NabBuxGjoMrdhNXuwQ2pM9_HBMJI_UNn8cy-phJm6PfK9Y-ohHAz0Il-1-6Ee7dVoVUsVu326tgE7HL81pyOnkgoJTxKJKEKGk75D5ef0OKtyOdfOE6tQuJ7OyzxlboViWUMxs7BmoXpaxbQJFUojynjQ6OalSuqU_dfBceVegvE=w2274-h1166-no)
## Keto Tracker

### What is it?
This is an app to help track your macronutrients while on a diet. Users can enter the details of their meal and see the total nutritional value of all of their meals that day.

### Tech
Python/Django, React.js, Chart.js

### What's Working
-Users can sign up and log in

-Users can log a meal and the graph will update to reflect changes

### What's Broken
-Users can see meals logged by all users, not just their own meals

-Meals logged from the UI (not from Django admin panel) have no "owner"

-UI issues, mainly when the login/signup form is expanded

### What's Next
-UI fixes

-Associating logged meals with the current user

-Filtering meals returned by the API so that only the current user's meals are returned

-Moving away from default Django DB so the app can be hosted

-Sorting meals in the log so users can see meals from today/last week/last month/etc

-Graph to show macro intake over time
