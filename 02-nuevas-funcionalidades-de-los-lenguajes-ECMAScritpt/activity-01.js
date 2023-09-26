const productos = [
	{
		manzanas:3,
		peras:2,
		carne:1,
		jugos:5,
		dulces:2
	},
	{
		manzanas:1,
		sandias:1,
		huevos:6,
		jugos:1,
		panes:4
	}
];

const AllKeys = [];

productos.forEach((item) => {
	Object.keys(item).forEach((key) => {
		if (!AllKeys.includes(key)) {
			AllKeys.push(key);
		}
	});
});

let totalProducts = 0;

productos.forEach((item) => {
	Object.values(item).forEach((value) => {
		totalProducts += value;
	});
});

console.log('AllKeys', AllKeys);
console.log('totalProducts', totalProducts);
