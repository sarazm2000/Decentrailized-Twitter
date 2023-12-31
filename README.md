# Decentrailized-Twitter Project

# راه اندازی پروژه

پس از آنکه پروژه را از مخرن گیتهاب کلون کردید میتوانید
ار دستور زیر برای نصب پکیج های مورد نیاز استفاده کنید:

### `npm install`

سپس با دستور زیر میتوانید پروژه را اجرا کنید:

### `npm start`

# مراحل انجام کار

در این ریپازیتوری با استفاده از دستور زیر پروژه ریکت میسازیم.

### `npx create-react-app decent`

<img width="682" alt="Screenshot 2023-07-14 at 1 00 44 PM" src="https://github.com/sarazm2000/Decentrailized-Twitter/assets/63396470/7dabd37a-3369-4103-a668-cb3f10d96d23">

برای قرار دادن پروژه روی مخزن از دستورات زیر استفاده کردیم:

### `git init`

### `git add .`

### `git commit -m "initial project"`

### `git push origin main`

<img width="682" alt="Screenshot 2023-07-14 at 12 15 18 PM" src="https://github.com/sarazm2000/Decentrailized-Twitter/assets/63396470/385711a6-f284-4301-a2ee-f632b2b2cbb5">

<img width="682" alt="Screenshot 2023-07-14 at 12 16 04 PM" src="https://github.com/sarazm2000/Decentrailized-Twitter/assets/63396470/4ddaa7d0-b97a-45ba-8afc-9df2d9f225fd">

فایل گیت ایگنور را در تصویر زیر میبینید:

<img width="1440" alt="Screenshot 2023-07-14 at 10 49 41 PM" src="https://github.com/sarazm2000/Decentrailized-Twitter/assets/63396470/14f9c92e-aacb-4660-b6a3-f3b81bf60546">

ما در پروژه تغییرات و اضافه کردن هر ویژگی جدید را در یک برنچ با نام feature پوش کردیم:
### `git checkout -b feature .`

### `git add .`

### `git commit -m "add login page"`

### `git push origin main`

<img width="682" alt="Screenshot 2023-07-14 at 12 26 36 PM" src="https://github.com/sarazm2000/Decentrailized-Twitter/assets/63396470/c5265e3d-ffa3-46db-9e60-fab31312ac15">

با اعمال محدودیت روی برنچ main وقتی میخواهیم از سایر برنچ ها به برنچ main مرج کنیم، باید حتما pull request بزنیم.

<img width="1341" alt="Screenshot 2023-07-14 at 10 38 40 PM" src="https://github.com/sarazm2000/Decentrailized-Twitter/assets/63396470/aa529a84-8b7c-4ba9-bb2b-258dec6ab6c8">


<img width="1341" alt="Screenshot 2023-07-14 at 10 38 51 PM" src="https://github.com/sarazm2000/Decentrailized-Twitter/assets/63396470/d31be4f4-da32-456f-9ecf-cfa6fbaeca58">


![2023-07-14 22 53 43](https://github.com/sarazm2000/Decentrailized-Twitter/assets/63396470/191115e9-b048-4c02-b6b6-987a20bdf656)

![2023-07-14 22 53 53](https://github.com/sarazm2000/Decentrailized-Twitter/assets/63396470/5edea35e-714a-4aa2-83f2-6373b30ed71b)

![2023-07-14 22 53 57](https://github.com/sarazm2000/Decentrailized-Twitter/assets/63396470/02c488bb-bfd9-4ef5-a64b-e6b982270764)


<img width="1440" alt="Screenshot 2023-07-14 at 4 13 25 PM" src="https://github.com/sarazm2000/Decentrailized-Twitter/assets/63396470/4859e00f-934e-4516-bff8-98216de4abad">


هر بار که یک فیچری کامل میشود، مرج ریکوئست میزنیم و با برنچ مین پوش میکنیم.

همچنین برای فیکس کردن برخی باگ ها برنچ hotfix را میسازیم و در آن پوش میکنیم.


دو نمونه از کانفلیکت هایی که در این پروژه برایمان پیش آمده را در این جا قرار میدهیم:

<img width="1440" alt="Screenshot 2023-07-14 at 9 23 09 PM" src="https://github.com/sarazm2000/Decentrailized-Twitter/assets/63396470/49d824e3-b7c0-42c8-b04a-a983eb1ed189">


<img width="1440" alt="Screenshot 2023-07-14 at 11 29 02 PM" src="https://github.com/sarazm2000/Decentrailized-Twitter/assets/63396470/1bfa92a3-10ce-4236-a770-88122e5aa32e">

<img width="682" alt="Screenshot 2023-07-14 at 11 31 48 PM" src="https://github.com/sarazm2000/Decentrailized-Twitter/assets/63396470/91500de0-d8c6-46f6-a6ed-e67c2828c0d2">


# سوالات

### پوشه‌ی .git چیست؟ چه اطلاعاتی در آن ذخیره می‌شود؟ با چه دستوری ساخته می‌شود؟

این پوشه با دستور git init ساخته میشود و شامل همه اطلاعات مورد نیاز برای پروژه، مثل نگهداری تاریخچه تغییرات، branch ها و تنظیمات و … است که برای ورژن کنترل نیاز است.
در این پوشه branch ها و اطلاعات مربوط به هر branch مثل نام آن و پوینترهایی به اخرین commit و … ذخیره میشود. کامیت ها نیز در این فولدر ذخیره میشوند که هر کامیتی در یک ریپازیتوری اطلاعاتی در خود دارد مثل زمان کامیت، آیدی کسی که کامیت کرده و پوینترها به کامیت های قبلی است که در فولدر .git ذخیره میشوند. یکی دیگر از چیزهایی که در این فولدر ذخیره میشود، git objects است که شامل فایل ها و تغییراتی است که در ریپازیتوری انجام میشود. گیت آبجکت ها شامل blobهایی هستند که محتوای فایل ها را نشان میدهند و همچنین شامل trees هستند که ساختار فایل ها را نشان میدهند و کامیت ها که نشاندهنده تاریخچه تغییرات هستند. همچنین تنظیمات گیت مانند نام کاربر و ایمیل و تنظیمات ریموت و اطلاعات مربوط به گیت نیز در این پوشه ذخیره میشود.



### منظور از atomic بودن در atomic commit و atomic pull-request چیست؟

#### atomic commit

وقتی که در ریپازیتوری یک کامیتی انجام میشود باید همه تغییرات مربوط به یک ویژگی در یک کامیت قرار بگیرد و همه آن ویژگی ها در یک کامیت باشند. یعنی کامیت ها باید یک وضعیت سالم و قابل استفاده را ارائه دهند تا اگر نیاز بود آن کامیتی ریورت شود و به این بازگردد به یک وضعیت استیبل برسیم.

#### atomic pull request

در اتمیک پول ریکوئست منظور آن است که وقتی کاربر پول ریکوئست میزند تا تغییراتش را با برنچ مین ترکیب کند باید تغییرات به صورت کامل و قطعی اتفاق بیفتد و همه مراحل پیش رو مثل تست ها و رفع کانفلیکت ها و… به صورت کامل و درست انجام شود.


### تفاوت دستورهای fetch و pull و merge و rebase را بیان کنید.


Fetch:
دستور fetch اطلاعات آخرین تغییراتی را که در ریپازیتوری اصلی (remote repository) انجام شده است، به ریپازیتوری محلی (local repository) منتقل می‌کند. با دستور fetch، شما اطلاعات آخرین تغییرات را دریافت می‌کنید، اما هیچ تغییری در شاخه کاری فعلی خود اعمال نمی‌شود. این دستور برای بروزرسانی نمایش اطلاعات و بررسی تغییرات انجام شده در ریپازیتوری اصلی استفاده می‌شود.

Pull:
دستور pull اطلاعات آخرین تغییرات را از ریپازیتوری اصلی (remote repository) به ریپازیتوری محلی (local repository) منتقل کرده و در شاخه کاری فعلی شما اعمال می‌کند. این دستور در واقع ترکیبی از دو دستور fetch و merge است. به این صورت که ابتدا اطلاعات آخرین تغییرات را با دستور fetch دریافت می‌کند و سپس با دستور merge تغییرات را در شاخه کاری فعلی اعمال می‌کند. با دستور pull می‌توانید تغییرات را از ریپازیتوری اصلی به ریپازیتوری محلی خود بیاورید و کدهای خود را با آخرین نسخه همگام کنید.

Merge:
دستور merge برای ادغام تغییرات بین دو شاخه (branch) در Git استفاده می‌شود. با استفاده از این دستور، تغییرات اعمال شده در یک شاخه را با یک شاخه دیگر ادغام می‌کنید. این دستور معمولاً پس از دریافت تغییرات با استفاده از fetch یا pull و در صورت نیاز به ادغام تغییرات از یک شاخه دیگر استفاده می‌شود.

Rebase:
دستور rebase نیز برای ادغام تغییرات بین دو شاخه در Git استفاده می‌شود، اما روشی متفاوت از merge را پیشنهاد می‌دهد. در عمل، دستور rebase باعث انتقال تمام تغییراتی موجود در شاخه فعلی را بر روی یک شاخه دیگر می‌شود. به عبارت دیگر، تغییرات شما به صورت خط به خط در بالای تغییرات شاخه هدف قرار می‌گیرند. نتیجه آن این است که تاریخچه تغییرات در شاخه هدف بهبود می‌یابد و از تاریخچه تغییرات جداگانه‌ای برای ادغام استفاده نمی‌کند. دستور rebase به شما امکان می‌دهد تغییرات خود را به صورت خط به خط واضح‌تری بررسی کنید، اما باید با دقت استفاده شود زیرا می‌تواند تاریخچه تغییرات را تغییر دهد و باعث ایجاد مشکلات در صورت استفاده نادرست شود.


### تفاوت چهار دستور reset و revert و restore را بیان کنید.

git revert
این دستور یک commit جدید ایجاد می کند که تغییرات commit قبلی را لغو می کند. این دستور تاریخچه جدیدی را به پروژه اضافه می کند (تاریخچه موجود را تغییر نمی دهد).

git reset
این دستور کمی پیچیده تر است. در واقع بسته به نحوه فراخوانی آن چند کار متفاوت انجام می دهد. این شاخص را تغییر می دهد (به اصطلاح "منطقه مرحله بندی"). یا تغییر می کند که یک سر شاخه در حال حاضر به آن اشاره می کند. این دستور ممکن است تاریخچه موجود را تغییر دهد (با تغییر commit که یک شاخه به آن ارجاع می دهد).

git restore
 در مورد بازیابی فایل‌ها در درخت کاری از ایندکس یا commit دیگر است.
این دستور شعبه شما را به روز نمی کند.
این دستور همچنین می تواند برای بازیابی فایل های موجود در فهرست از commit دیگر استفاده شود.


### منظور از stage چیست؟ دستور stash چه کاری را انجام می‌دهد؟

یک عکس فوری وضعیت چیزی (مثلاً یک پوشه) در یک نقطه خاص از زمان است. در این مورد، Snapshot به معنای محتوای فعلی شاخه آزمایشی است، این نیازی به اصلاح نظر HEAD نیست.
هنگامی که commit می کنید، دایرکتوری کاری فعلی مخزن خود را به عنوان یک عکس فوری جدید ذخیره می کنید (commit = عکس فوری + ابرداده). مخزن Git شما متشکل از مجموعه ای از عکس های فوری (تعهد) است، در عوض سایر VCS از مجموعه ای از تفاوت ها تشکیل شده است.




### مفهوم snapshot به چه معناست؟

Stage در Git به معنای نقطه میانی بین working directory (پوشه‌ی کاری) و commit است. در واقع، فایل‌هایی که در working directory تغییر کرده‌اند و می‌خواهید آن‌ها را در commit بعدی شامل کنید، باید ابتدا به stage اضافه شوند. Stage یک مرحله پیش‌نیاز است که فایل‌ها در آن آماده شده و منتظر commit قرار می‌گیرند


Stage در Git به معنای نقطه میانی بین working directory (پوشه‌ی کاری) و commit است. در واقع، فایل‌هایی که در working directory تغییر کرده‌اند و می‌خواهید آن‌ها را در commit بعدی شامل کنید، باید ابتدا به stage اضافه شوند. Stage یک مرحله پیش‌نیاز است که فایل‌ها در آن آماده شده و منتظر commit قرار می‌گیرند




