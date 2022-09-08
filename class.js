// 32-7 (advanced) Class, constructor, method, create object from class

// একি ধরনের অনেক গুলো অবজেক্ট বানানোর জন্য ক্লাস ব্যবহার করা হয় ।  

// ক্লাস এর ভিতর কোন প্রপার্টিকে এক্সেস করতে গেলে this কি ওয়ার্ড ব্যবহার করতে হয় ।  

class Support {
    name;
    designation= 'Web-developer';
    address= 'BD';
    constructor(name){
this.name =name;
    }
    startSession (){
        console.log('start a meet session')
    }

}

const shawon =new Support ('jahir uddin bhuya')
console.log(shawon)