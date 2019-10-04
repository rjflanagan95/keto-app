![Screenshot of Keto App](https://lh3.googleusercontent.com/2-iEhxH4KT3vkdf12vibXdTYKMSDsabpcL0gonDdZR6wBAFq5I7smQsPAQTDdbCVEgnzT1NjwLWOpdhyyCluluiVkG4gxDKCD8X4BijxpOH0lKfXIvsEPCTyYtm1tpadrVuV1pnb-wmO3LIHzouAzf_9SfOaf2IsmeLEo1BQQst8pY39CgaqT4xKicNhuc3igTPRtkE1Ia46Rit5_5eQo6WQRDBo_kL3k1B-WXJHm_SiJtcCwiG_1TPCw_6uH6SA3Bn-DCU4l2Hg9PSs8Iv9c_LuRbd8oJ_M-a1YABhEdfxyeSumapBbHYrZ_vIWFZ2ue24GTKv4GG0jGlwlI0h2e_h7K-yjm1fHSiMceJzcRVqrFgkl80I6LDEiaRKRyW2YcpfqeIHHo3OYKDAQs210sN4ZtrpffliqeKmdr7gESMPgRUeNVqoWBkGCSAJp9aHbYoyvHXUXhD_fnTyiIb2hpP4kgNgL4E675VG0u87x3VEsgk0tg_7dFyJwZfP1EYCUoRGG3ni-Kr94vfreux-ID6LX3-0Ydu5YikweEW5JmUKaXiA1TzjucTVGZgPIQugy9XLVFe-srW-AftQFIJSC5ZgsKkWC9OT-Z2PBujjabHYR6x_o1mgkSA6ZIXrlPie30JT_1U-PSOzlQ-3SjCCs7k59_ZsxTuziY8QCrqE-NTktzBs_vVG2_PU=w1440-h739-no)
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
