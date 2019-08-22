![Screenshot of Keto App](https://lh3.googleusercontent.com/WFOL2MTroUpAXVUUK9HzLF1Taf2_v-enJVqh_VAMmCxNO6V5_I6rYajq0q_MKDhMPG1ijJjM1wjIjis5yGPfcCSfxAu6lGR5tIUaB2ErP2Vc3tzb5PCxyt-439m_r-0X9rnMOo_VJk5FyLwqv6ve6BaQXuSOZjwJtFYL13Yp8dlgPk6gtVb5psmzEXiPAi7G9rIsMLzRZICbSzYim4nUQtOwFgAxVNhcj4m5_rYcWqsJeH9-F7xA4uUySgfO55Og_KVbNqMGYNKbMlDE5GzCaGKFLiuxY3fLFoCyiPaZZol8pSjnPN8qnHOPsJSonFTU7g65_U42wLnavm4Ju3dAd77TVXYHEjGvrj7zTIbYEusVBzWp6DlQZ4v6lGphaG--mRLtsr6ctsnKSd-RJSmgJ8ljH5QIntJ8d5AYge0cFAPE_nItKLoUonW5oYUyGPi8C4tEhzN3EG2Tm8yVLHljEo6TiWXtVpNkF8jCKmtYZK9uX6kK460SY0GMfybkVoTrsjueWpEslm_8yJz54YID_iLak1X3bR54aKbX9QgxtA0rG4iigf4FxhOgPuoPScDJQYtnw2z6krb5nRdb8NmbQi123QuphLTME1D4IE3aQLJjQreLu8G6KzIrt6_BEYb0wDvg3BzajfuiX-krpgUHeCmQRx5B5XE=w2274-h1166-no)
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