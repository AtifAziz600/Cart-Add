const GET = () => {
    return Response.json([
      {
        id: 1,
        name: "Mac Book Air",
        price: 999,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqi8velnLGFXHvVQLb86nNJB97SCRtLNb-6w&s",
        quantity: 1,
      },
      {
        id: 2,
        name: "Shoes",
        price: 99,
        image:
          "https://sellercenter.padmazon.com.bd/assets/images/product-image/ce3c24c08e153b229ce199a34933d549.jpg",
        quantity: 1,
      },
      {
        id: 3,
        name: "Football",
        price: 299,
        image:
          "https://www.premierleague.com/resources/rebrand/v7.149.1/i/nike-ball-hub/balls/24-third.png",
        quantity: 1,
      },
      {
        id: 4,
        name: "Iphone 14 pro",
        price: 799,
        image:
          "https://i5.walmartimages.com/seo/Restored-Apple-iPhone-14-Pro-128GB-Deep-Purple-T-Mobile-MQ0E3LL-A-Refurbished_1385d15c-17b0-4392-8fc1-414cae1a51ed.75f6972b7faabe8490df9e82084adf01.jpeg",
        quantity: 1,
      },
    ]);
    
}

export {GET}