function timeoutPromiseResolve(interval) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("successful");
        }, interval);
    });
};

function timeoutPromiseReject(interval) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            reject("error");
        }, interval);
    });
};

function timeTest() {
    timeoutPromiseResolve(5000);
    timeoutPromiseReject(2000);
    timeoutPromiseResolve(3000);
}

let startTime = Date.now();

timeTest()
    .then(() => { })
    .catch(e => {
        console.log(e);
        let finishTime = Date.now();
        let timeTaken = finishTime - startTime;
        alert("Time taken in milliseconds: " + timeTaken);
    })


//// اجرا از خط 23 با ثبت زمان شروع آغار می شود
//// .می کند call را timeTest سپس 
//// می کند call را  timeoutPromiseResolve(5000) ، timeTest   در 
//// آن می نشیند  setTimeout و ورودی 5000 در تابع 
////را هندل می کند reject  و  resolve است که دو حالت  arrow function  می سازد و ورودی آن یک   promise  در خط 2 یک   
////مراجعه می کند timeTest() اجرا شود پس به دستور بعدی  resolve قرار است پس از 5000 میلی ثانیه 
//// هندل می کند reject   می سازد و  promise  شده و این تابع هم یک   call، timeoutPromiseReject(2000) در ادامه 
////timeTest() اجرا شود پس سراغ دستور بعدی reject قرار است پس از2000 میلی ثانیه  
//// بعد و  reject  می رود و مجددا تابع اول را با مدت زمان کوتاه تری (3000) صدا می زند . ترتیب اجرا شدن اول  
////وجود دارد یعنی باید .then() ا3000و5000است . سپس چون در خط 26 دستور resolve  دو 
//// 12 خط  error ابتدا  timeTest() بعد از تمام شدت کار 
////را دریافت کرده و چاپ می کند و بعد زمان را جهت زمان پایان کار، ثبت می کند 
////چقدر طول کشیده است timeTest()سپس مدت زمان کل عملیات را گزارش می دهد که یعنی عملیات تابع 

////   : داریم چون  error  ولی در خروجی این کد دو 
////زد then نیست و نمی توان روی آن  async یک تابع timeTest()  اول اینکه 
////استفاده کرد  .catch() آن نمی توان از  error و حتی برای هندل کردن 
//// خط 12هندل نشده است و خطای دوم در خروجی مربوط به همین موضوعerror پس اصلا  در این کد هیچ جایی 
////عدم هندل ارور) است)