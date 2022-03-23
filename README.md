# Nuxt 3, Pinia 2, Tailwindcss 3, Prettier and Eslint
#### This repo have Nuxt 3 with :
  - Pinia Store
  - Tailwindcss 3
  - Prettier Configs
  - Eslint Configs
  - Husky Pre-push config
  - Heroicons
  - Headless UI

If you want to delete unnecessary packages for you or your project, you can delete from package.json file but if you delete packages except Headless UI package, you need to search and clear from other files.

> **Note:** In this repo i used __script setup__ and i highly recommend to you use.

#### Some problems to need to fix:
  - Eslint cannot lint Nuxt 3 global functions (useState or computed etc.). Because these functions becoming with Nuxt 3 package and you dont need to import in script and Eslint cannot see they are global functions. Right now i solved in .eslintrc file with global object. You can add your global function and set the value to "readonly".
  - Before push, husky stopping you if you didnt format something in the project. Then you can run __yarn format__ but there is a one problem. After you run __yarn format__ , its formatting files then you can push without last formatted changes because the pre push hook is not checking commit changes its checking current file statuses.

If you have any solution to problems on above or have another problem, you can open an issue or direct message me from any social media. 
