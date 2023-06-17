import { a } from "@/script/app"
import jQuery from 'jquery'
import "@/style/index.less"

jQuery(function () {
    console.log(111)
})
console.log(a)
jQuery.ajax({
    url:"httP://127.0.0.1:3000/api/abc"
})

jQuery.ajax({
    url:"httP://127.0.0.1:3001/api1/abc1"
})

console.log("process.env.NODE_ENV:",process.env.NODE_ENV);