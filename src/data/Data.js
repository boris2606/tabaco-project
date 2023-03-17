// Tabaco image
import blue from '../img/tabaco/blue.jpeg'
import cafe from '../img/tabaco/cafe.jpeg'
import green from '../img/tabaco/green.jpeg'
import red from '../img/tabaco/red.jpeg'
import tabaco from '../img/tabaco/tabaco.jpeg'
import yellow from '../img/tabaco/yellow.jpeg'
// Gilses image
import gilses from '../img/gilses/gilses_slide.jpeg'
import compan from '../img/gilses/compan.jpeg'
import dark from '../img/gilses/dark_horse.jpeg'
import fire from '../img/gilses/fire_box.jpeg'
import hocus from '../img/gilses/hocus.jpeg'
import magnus from '../img/gilses/magnus.jpeg'
import masc from '../img/gilses/masc.png'
// Machines image
import gizeh_duo from '../img/machines/gizeh_duo.jpeg'
import gizen from '../img/machines/gizen.jpeg'
import gizen_2 from '../img/machines/gizen_2.jpeg'
import korona from '../img/machines/korona.jpeg'
import micromatic from '../img/machines/mikromatic.jpeg'
import pover from '../img/machines/pover.jpeg'

export const salesPersent = 10

export const headerNavigation = [
    {
        name:'Головна',
        path: '/'
    },
    {
        name:'Товар',
        path: '/products'
    },
    {
        name:'Акції',
        path: '/sale-products'
    },
    {
        name:'Доставка та оплата',
        path: '/delivary&pay'
    }
]

export const dataProducts = [
    {
        name: 'Virginia',
        description: "Чистий віргінський тютюн (без домішок) найчастіше буває у вигляді пластівців (flake). Яскравий приклад Dunhill Light Flake (середньої фортеці, досить солодкий смак), тютюн марки Rattray досить м'який, Marlin Flake – вагомий представник сімейства чистих віргінських тютюнів (міцний), смак залишається незмінно солодкий.",
        slider: false,
        sales: true,
        price: 100,
        priceCard: 100,
        vendor: 'Вирджиния',
        image: tabaco,
        buyCount: 1,
        id: 1,
        salesPersent,
        category: 'tabaco',
        sliderGallery: [blue,red]
    },
    {
        name: 'Burley',
        description: "У чистому вигляді тютюн Берлі виробляється в основному американськими та датськими компаніями. Тютюн Blue Edgeworth, Old English та Half-and-Half – класичні приклади, причому останній злегка ароматизований. Берлі - також основний інгредієнт у більшості датських сумішей тютюну McBaren.",
        slider: false,
        sales: false,
        price: 200,
        priceCard: 200,
        vendor: 'Теннеси, Кентукки',
        image: blue,
        buyCount: 1,
        id: 2,
        salesPersent,
        category: 'tabaco',
        sliderGallery: [blue,red,green,red]
    },
    {
        name: 'Spice',
        description: "Це не один різновид тютюну, а досить велика група специфічних видів тютюну, які зазвичай додають у суміші в дуже невеликих кількостях для надання пікантності смаку. До них відносяться Oriental, Latakia, Perique та Kentucky, більшість із них часто використовуються в англійських сумішах.",
        slider: false,
        sales: false,
        price: 300,
        priceCard: 300,
        vendor: 'Англия',
        image: cafe,
        buyCount: 1,
        id: 3,
        salesPersent,
        category: 'tabaco',
        sliderGallery: [blue,red,green,red]
    },
    {
        name: 'Oriental',
        description: "Тютюн Oriental зростає у Греції, Болгарії, Сирії, Югославії, Албанії, Румунії та на півдні Росії, також частково в Італії, Лівані, Ірані, Іраку та Ізраїлі. Найбільш відомі види - Izmir, Samsun, Yedidje, Cavella та Bursa. Відмінною рисою цього сорту є маленьке овальне листя блідо-жовтого кольору з солодким ароматом та смаком. (В іншому джерелі вказують - курний сухий злегка кислуватий смак і аромат). Цей тютюн також використовується для виробництва екзотичних цигарок у Єгипті та арабських країнах.",
        slider: false,
        sales: true,
        price: 400,
        priceCard: 400,
        vendor: 'Греции, Болгарии, Сирии, Югославии, Албании, Румынии',
        image: green,
        buyCount: 1,
        id: 4,
        salesPersent,
        category: 'tabaco',
        sliderGallery: [blue,red,green,red]
    },
    {
        name: 'Latakia',
        description: "Латакія має дуже багатий насичений смак та «димний» аромат. Латакія - це обов'язковий інгредієнт у традиційних англійських сумішах, його вміст може варіювати від кількох відсотків до 40-50% і більше. Не багато курців люблять вживати цей вид тютюну в чистому вигляді (100% Латакія), таке куріння буде жорстким і різким, і не тому, що тютюн міцний, а тому, що він горить і сушить ротову порожнину і горло.",
        slider: false,
        sales: false,
        price: 500,
        priceCard: 500,
        vendor: 'Турция',
        image: red,
        buyCount: 1,
        id: 5,
        salesPersent,
        category: 'tabaco',
        sliderGallery: [blue,red,green,red]
    },
    {
        name: 'Perique',
        description: "Цей рідкісний вид тютюну повільно тліє і має дуже міцний насичений смак. Перик не можна курити у чистому вигляді, його додають у тютюнові суміші у дуже невеликій кількості, не більше 5%. Його зазвичай поєднують з тютюном Virginia, щоб надати йому фортеці, насиченості. “Escudo” – гарний приклад суміші Virginia з Perique. Elizabethan Mixture – гарний зразок суміші Virginia з ледве відчутним дотиком Perique.",
        slider: false,
        sales: true,
        price: 600,
        priceCard: 600,
        vendor: 'Штата Луизиана',
        image: yellow,
        buyCount: 1,
        id: 6,
        salesPersent,
        category: 'tabaco',
        sliderGallery: [blue,red,green,red]
    },
    {
        name: 'GAMA',
        description: "Гільзи для цигарок GAMA підходять для роботи з будь-якими видами ручних та електричних машинок. Стандартні сигаретні гільзи високої якості. Міцні, не рвуться під час набивання табаком. Гільзи виготовлені з цупкого паперу та целюлозного фільтру. Якісний папір чудово зберігає запах табаку.",
        slider: false,
        sales: true,
        price: 200,
        priceCard: 200,
        vendor: 'GAMA',
        image: gilses,
        buyCount: 1,
        id:7,
        salesPersent,
        category:'gilses',
        sliderGallery: [blue,red,green,red]
    },
    {
        name: 'Dark Horse Blue',
        description: "Ці гільзи сподобаються прихильникам полегшеного паління. Перфорована смужка змішує дим із повітрям і робить палення менш міцним.",
        slider: false,
        sales: false,
        price: 100,
        priceCard: 100,
        vendor: 'Польша',
        image: compan,
        buyCount: 1,
        id:8,
        salesPersent,
        category:'gilses',
        sliderGallery: [blue,red,green,red]
    },
    {
        name: 'KORONA-1',
        description: "Гільзи для набивання цигарок Korona 550 штук із фільтром від перевіреного польського виробника. В одній упаковці 550 гільз. У гільзах є фільтр, який значно зменшить вплив шкідливих речовин на ваше здоров'я.",
        slider: false,
        sales: true,
        price: 250,
        priceCard: 250,
        vendor: 'KORONA',
        image: dark,
        buyCount: 1,
        id:9,
        salesPersent,
        category:'gilses',
        sliderGallery: [blue,red,green,red]
    },
    {
        name: 'KORONA-2',
        description: "Гільзи для набивання сигарет Korona 550 штук із фільтром від перевіреного польського виробника. В одній упаковці 550 гільз. У гільзах є фільтр, який значно зменшить вплив шкідливих речовин на ваше здоровя",
        slider: false,
        sales: false,
        price: 250,
        priceCard: 250,
        vendor: 'KORONA',
        image: fire,
        buyCount: 1,
        id:10,
        salesPersent,
        category:'gilses',
        sliderGallery: [blue,red,green,red]
    },
    {
        name: 'KORONA-3',
        description: 'Гільзи для набивання сигарет Korona 550 штук із фільтром від перевіреного польського виробника. В одній упаковці 550 гільз. У гільзах є фільтр, який значно зменшить вплив шкідливих речовин на ваше здоровя ',
        slider: false,
        sales: false,
        price: 250,
        priceCard: 250,
        vendor: 'KORONA',
        image: hocus,
        buyCount: 1,
        id:11,
        salesPersent,
        category:'gilses',
        sliderGallery: [blue,red,green,red]
    },
    {
        name: 'KORONA-4',
        description: 'Гільзи для набивання сигарет Korona 550 штук із фільтром від перевіреного польського виробника. В одній упаковці 550 гільз. У гільзах є фільтр, який значно зменшить вплив шкідливих речовин на ваше здоровя ',
        slider: false,
        sales: true,
        price: 250,
        priceCard: 250,
        vendor: 'KORONA',
        image: magnus,
        buyCount: 1,
        id:12,
        salesPersent,
        category:'gilses',
        sliderGallery: [blue,red,green,red]
    },
    {
        name: 'KORONA-5',
        description: 'Гільзи для набивання сигарет Korona 550 штук із фільтром від перевіреного польського виробника. В одній упаковці 550 гільз. У гільзах є фільтр, який значно зменшить вплив шкідливих речовин на ваше здоровя ',
        slider: false,
        sales: false,
        price: 250,
        priceCard: 250,
        vendor: 'KORONA',
        image: masc,
        buyCount: 1,
        id:13,
        salesPersent,
        category:'gilses',
        sliderGallery: [blue,red,green,red]
    },
    {
        name: 'KORONA',
        description: "Якісна машинка для набивання сигаретних гільз формату Slim.",
        slider: false,
        sales: true,
        price: 160,
        priceCard: 160,
        vendor: 'KORONA',
        image: korona,
        buyCount: 1,
        id:14,
        salesPersent,
        category: 'machines',
        sliderGallery: [blue,red,green,red]
    },
    {
        name: 'POWERMATIC IV',
        description: 'Ця машина для набивання сигарет оснащена компресором з покриттям титану і рамкою з алюмінієвого сплаву для рівномірного наповнення гільзи. Підходить як для шанувальників, так і новачків. Прозора завантажувальна лійка вміщує додатковий тютюн під час забиття та легко знімається для очищення. Продуманий механізм утримання та забивання гільз має електронний захист від заклинювання тютюну в камері. Пристрій має ковзну і стійку основу.',
        slider: false,
        sales: true,
        price: 4700,
        priceCard: 4700,
        vendor: 'Польша',
        image: pover,
        buyCount: 1,
        id:15,
        salesPersent,
        category: 'machines',
        sliderGallery: [blue,red,green,red]
    },
    {
        name: 'GIZEH Silver Tip Boy Plus',
        description: "Машинка для набивання гільз GIZEH Silver Tip Boy Plus - №1 серед пристроїв такого типу. Вона має досконалий механізм, надійна, проста і зручна у використанні. Завдяки спеціальній перемичці, призначена для набивання гільз не тільки стандартного формату (довжина гільзи 84 мм/довжина фільтра 15 мм), але й для гільз із EXTRA подовженим фільтром (довжина гільзи 84 мм/довжина фільтра 25 мм).",
        slider: false,
        sales: false,
        price: 210,
        priceCard: 210,
        vendor: 'GIZEH',
        image: gizen,
        buyCount: 1,
        id:16,
        salesPersent,
        category: 'machines',
        sliderGallery: [blue,red,green,red]
    },
    {
        name: 'GIZEH Silver Tip Duo',
        description: "Універсальна машинка для набивання гільз GIZEH Silver Tip Duo призначена для набивання гільз двох форматів: стандартних (довжина гільзи 84 мм/довжина фільтра 15 мм) і з EXTRA подовженим фільтром (довжина гільзи 84 мм/довжина фільтра 25 мм).",
        slider: false,
        sales: false,
        price: 400,
        priceCard: 400,
        vendor: 'GIZEH',
        image: gizeh_duo,
        buyCount: 1,
        id:17,
        salesPersent,
        category: 'machines',
        sliderGallery: [blue,red,green,red]
    },
    {
        name: 'MikrOmatic DUO',
        description: 'Настільна ручна машинка для набивання сигаретних гільз стандартного (15 мм) та X-Long розміру (24 мм), виробництва фірми OCB. Хромований корпус виготовлений із високоякісної сталі. Пристрій має ковзну, стійку основу і сучасний дизайн.',
        slider: false,
        sales: true,
        price: 1600,
        priceCard: 1600,
        vendor: 'MikrOmatic',
        image: micromatic,
        buyCount: 1,
        id:18,
        salesPersent,
        category: 'machines',
        sliderGallery: [blue,red,green,red]
    },
    {
        name: 'GIZEH Duo Roller',
        description: "GIZEH Duo Roller – це машинка для скручування сигарет, яка дозволяє згортати сигарети формату Slim та Extra Slim. Для перемикання режимів передбачений зручний регулятор на боці машинки. Легкий і ергономічний пластик забезпечує надійність, міцність і простоту експлуатації.",
        slider: false,
        sales: false,
        price: 120,
        priceCard: 120,
        vendor: 'GIZEH',
        image: gizen_2,
        buyCount: 1,
        id:19,
        salesPersent,
        category: 'machines',
        sliderGallery: [blue,red,green,red]
    }
]

dataProducts.map(product => {
    if (product.sales){
        return product.salesPriceProduct = product.price - ((product.price / 100) * salesPersent)
    }
})