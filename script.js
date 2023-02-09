const data = [
  {
    dataa1: [
      {
        product: "apple",
        productDetials: [
          {
            model: "13 pro",
            price: 80000,
            modelNumber: 20220321,
            color: "black",
          },
          {
            model: "13",
            price: 70000,
            modelNumber: 20201210,
            color: "black",
          },
          {
            model: "13 pro max",
            price: 90000,
            modelNumber: 2021,
            color: "black",
          },
        ],
      },
      {
        product: "samsung",
        productDetials: [
          {
            model: "s10",
            price: 90000,
            modelNumber: 2022765,
            color: "black",
          },
          {
            model: "s9",
            price: 70000,
            modelNumber: 2020876,
            color: "black",
          },
          {
            model: "s8",
            price: 60000,
            modelNumber: 2021765,
            color: "black",
          },
        ],
      },
      {
        product: "oneplus",
        productDetials: [
          {
            model: "7 pro",
            price: 40000,
            modelNumber: 2022765,
            color: "black",
          },
          {
            model: "8 pro",
            price: 50000,
            modelNumber: 2020876,
            color: "black",
          },
          {
            model: "9 pro",
            price: 60000,
            modelNumber: 2021765,
            color: "black",
          },
        ],
      },
    ],
    dataa2: [
      {
        product: "apple",
        productDetials: [
          {
            model: "13 pro",
            price: 80000,
            modelNumber: 20220321,
            color: "green",
          },
          {
            model: "13",
            price: 70000,
            modelNumber: 20201210,
            color: "green",
          },
          {
            model: "13 pro max",
            price: 90000,
            modelNumber: 2021,
            color: "green",
          },
        ],
      },
      {
        product: "samsung",
        productDetials: [
          {
            model: "s10",
            price: 90000,
            modelNumber: 2022765,
            color: "green",
          },
          {
            model: "s9",
            price: 70000,
            modelNumber: 2020876,
            color: "green",
          },
          {
            model: "s8",
            price: 60000,
            modelNumber: 2021765,
            color: "green",
          },
        ],
      },
      {
        product: "oneplus",
        productDetials: [
          {
            model: "7 pro",
            price: 40000,
            modelNumber: 2022765,
            color: "green",
          },
          {
            model: "8 pro",
            price: 50000,
            modelNumber: 2020876,
            color: "green",
          },
          {
            model: "9 pro",
            price: 60000,
            modelNumber: 2021765,
            color: "green",
          },
        ],
      },
    ],
    dataa3: [
      {
        product: "apple",
        productDetials: [
          {
            model: "13 pro",
            price: 80000,
            modelNumber: 20220321,
            color: "yellow",
          },
          {
            model: "13",
            price: 70000,
            modelNumber: 20201210,
            color: "yellow",
          },
          {
            model: "13 pro max",
            price: 90000,
            modelNumber: 2021,
            color: "yellow",
          },
        ],
      },
      {
        product: "samsung",
        productDetials: [
          {
            model: "s10",
            price: 90000,
            modelNumber: 2022765,
            color: "yellow",
          },
          {
            model: "s9",
            price: 70000,
            modelNumber: 2020876,
            color: "yellow",
          },
          {
            model: "s8",
            price: 60000,
            modelNumber: 2021765,
            color: "yellow",
          },
        ],
      },
      {
        product: "oneplus",
        productDetials: [
          {
            model: "7 pro",
            price: 40000,
            modelNumber: 2022765,
            color: "yellow",
          },
          {
            model: "8 pro",
            price: 50000,
            modelNumber: 2020876,
            color: "yellow",
          },
          {
            model: "9 pro",
            price: 60000,
            modelNumber: 2021765,
            color: "yellow",
          },
        ],
      },
    ],
  },
];

class Phone {
  constructor(product, model, modelNumber, price, color) {
    this._product = product;
    this._model = model;
    this._modelNumber = modelNumber;
    this._price = price;
    this._color = color;
  }

  getProduct() {
    return this._product;
  }

  getModel() {
    return this._model;
  }

  getModelNumber() {
    return this._modelNumber;
  }

  getPrice() {
    return this._price;
  }

  getColor() {
    return this._color;
  }
}

class Data1 extends Phone {
  constructor(model, modelNumber, price, color) {
    super(model, modelNumber, price, color);
  }

  getColor1() {
    console.log(`Color: Black`);
  }
}

class Samsung extends Phone {
  constructor(model, modelNumber, price, color) {
    super(model, modelNumber, price, color);
  }
}

let purchase = alert("Welcome TO Smartronics"); // Alert function
purchase;

// ____________________Apple Products__________________
// Apple 13 Data
let apple_13_Function = () => {
  const apple = new Data1(
    data[0].dataa1[0].product,
    data[0].dataa1[0].productDetials[1].model,
    data[0].dataa1[0].productDetials[1].modelNumber,
    data[0].dataa1[0].productDetials[1].price,
    data[0].dataa1[0].productDetials[1].color
  );

  const _apple = data[0].dataa1[0].productDetials[1];
  console.log(`Product: ${apple.getProduct()}`);
  console.log(`Model: ${apple.getModel()}`);
  console.log(`Model Number: ${apple.getModelNumber()}`);
  console.log(`Price: ${apple.getPrice()}`);
  console.log(`Color: ${apple.getColor()}`);
  console.log(`__________________________`);
};

// Apple 13 Pro Data
let apple_13_Pro_Function = () => {
  const apple = new Data1(
    data[0].dataa1[0].product,
    data[0].dataa1[0].productDetials[0].model,
    data[0].dataa1[0].productDetials[0].modelNumber,
    data[0].dataa1[0].productDetials[0].price,
    data[0].dataa1[0].productDetials[0].color
  );

  console.log(`Product: ${apple.getProduct()}`);
  console.log(`Model: ${apple.getModel()}`);
  console.log(`Model Number: ${apple.getModelNumber()}`);
  console.log(`Price: ${apple.getPrice()}`);
  console.log(`Color: ${apple.getColor()}`);
  console.log(`__________________________`);
};

// Apple 13 Pro Max
let apple_13_Pro_Max_Function = () => {
  const apple = new Data1(
    data[0].dataa1[0].product,
    data[0].dataa1[0].productDetials[2].model,
    data[0].dataa1[0].productDetials[2].modelNumber,
    data[0].dataa1[0].productDetials[2].price,
    data[0].dataa1[0].productDetials[2].color
  );
  console.log(`Product: ${apple.getProduct()}`);
  console.log(`Model: ${apple.getModel()}`);
  console.log(`Model Number: ${apple.getModelNumber()}`);
  console.log(`Price: ${apple.getPrice()}`);
  console.log(`Color: ${apple.getColor()}`);
  console.log(`__________________________`);
};
// _______________________________________________________

// ____________________Samsung Products__________________
// samsung s10 Data
let samsung_s10_Function = () => {
  const samsung = new Data1(
    data[0].dataa1[1].product,
    data[0].dataa1[1].productDetials[0].model,
    data[0].dataa1[1].productDetials[0].modelNumber,
    data[0].dataa1[1].productDetials[0].price,
    data[0].dataa1[1].productDetials[0].color
  );
  console.log(`Product: ${samsung.getProduct()}`);
  console.log(`Model: ${samsung.getModel()}`);
  console.log(`Model Number: ${samsung.getModelNumber()}`);
  console.log(`Price: ${samsung.getPrice()}`);
  console.log(`Color: ${samsung.getColor()}`);
  console.log(`__________________________`);
};

// samsung s9 Data
let samsung_s9_Function = () => {
  const samsung = new Data1(
    data[0].dataa1[1].product,
    data[0].dataa1[1].productDetials[1].model,
    data[0].dataa1[1].productDetials[1].modelNumber,
    data[0].dataa1[1].productDetials[1].price,
    data[0].dataa1[1].productDetials[1].color
  );
  console.log(`Product: ${samsung.getProduct()}`);
  console.log(`Model: ${samsung.getModel()}`);
  console.log(`Model Number: ${samsung.getModelNumber()}`);
  console.log(`Price: ${samsung.getPrice()}`);
  console.log(`Color: ${samsung.getColor()}`);
  console.log(`__________________________`);
};

// samsung s8 Data
let samsung_s8_Function = () => {
  const samsung = new Data1(
    data[0].dataa1[1].product,
    data[0].dataa1[1].productDetials[1].model,
    data[0].dataa1[1].productDetials[1].modelNumber,
    data[0].dataa1[1].productDetials[1].price,
    data[0].dataa1[1].productDetials[1].color
  );
  console.log(`Product: ${samsung.getProduct()}`);
  console.log(`Model: ${samsung.getModel()}`);
  console.log(`Model Number: ${samsung.getModelNumber()}`);
  console.log(`Price: ${samsung.getPrice()}`);
  console.log(`Color: ${samsung.getColor()}`);
  console.log(`__________________________`);
};
// _______________________________________________________

// ____________________Oneplus Products__________________
// Oneplus 7 Pro Data
let oneplus_7Pro_Function = () => {
  const oneplus = new Data1(
    data[0].dataa1[2].product,
    data[0].dataa1[2].productDetials[0].model,
    data[0].dataa1[2].productDetials[0].modelNumber,
    data[0].dataa1[2].productDetials[0].price,
    data[0].dataa1[2].productDetials[0].color
  );
  console.log(`Product: ${oneplus.getProduct()}`);
  console.log(`Model: ${oneplus.getModel()}`);
  console.log(`Model Number: ${oneplus.getModelNumber()}`);
  console.log(`Price: ${oneplus.getPrice()}`);
  console.log(`Color: ${oneplus.getColor()}`);
  console.log(`__________________________`);
};

// Oneplus 8 Pro Data
let oneplus_8Pro_Function = () => {
  const oneplus = new Data1(
    data[0].dataa1[2].product,
    data[0].dataa1[2].productDetials[1].model,
    data[0].dataa1[2].productDetials[1].modelNumber,
    data[0].dataa1[2].productDetials[1].price,
    data[0].dataa1[2].productDetials[1].color
  );
  console.log(`Product: ${oneplus.getProduct()}`);
  console.log(`Model: ${oneplus.getModel()}`);
  console.log(`Model Number: ${oneplus.getModelNumber()}`);
  console.log(`Price: ${oneplus.getPrice()}`);
  console.log(`Color: ${oneplus.getColor()}`);
  console.log(`__________________________`);
};

// Oneplus 9 Pro Data
let oneplus_9Pro_Function = () => {
  const oneplus = new Data1(
    data[0].dataa1[2].product,
    data[0].dataa1[2].productDetials[2].model,
    data[0].dataa1[2].productDetials[2].modelNumber,
    data[0].dataa1[2].productDetials[2].price,
    data[0].dataa1[2].productDetials[2].color
  );
  console.log(`Product: ${oneplus.getProduct()}`);
  console.log(`Model: ${oneplus.getModel()}`);
  console.log(`Model Number: ${oneplus.getModelNumber()}`);
  console.log(`Price: ${oneplus.getPrice()}`);
  console.log(`Testing = ${oneplus.getColor()} `);
  console.log(`Color: ${oneplus.getColor()}`);
  console.log(`__________________________`);
};
// _______________________________________________________

let Brand = prompt("Enter Your Brand");

switch (true) {
  case Brand == "13":
    console.log(apple_13_Function());

    break;
  case Brand == "13 pro":
    console.log(apple_13_Pro_Function());
    break;

  case Brand == "13 pro max":
    console.log(apple_13_Pro_Max_Function());
    break;
  case Brand == "apple":
    console.log(
      apple_13_Function(),
      apple_13_Pro_Function(),
      apple_13_Pro_Max_Function()
    );
    break;
  case Brand == "s10":
    console.log(samsung_s10_Function());
    break;
  case Brand == "s9":
    console.log(samsung_s9_Function());
    break;
  case Brand == "s8":
    console.log(samsung_s8_Function());
    break;
  case Brand == "samsung":
    console.log(
      samsung_s10_Function(),
      samsung_s9_Function(),
      samsung_s8_Function()
    );
    break;

  case Brand == "7 pro":
    console.log(oneplus_7Pro_Function());
    break;
  case Brand == "8 pro":
    console.log(oneplus_8Pro_Function());
    break;
  case Brand == "9 pro":
    console.log(oneplus_9Pro_Function());
    break;
  case Brand == "oneplus":
    console.log(
      oneplus_7Pro_Function(),
      oneplus_8Pro_Function(),
      oneplus_9Pro_Function()
    );
    break;

  default:
    console.log(`Sorry, Cant able to Find !!!!`);
    break;
}
