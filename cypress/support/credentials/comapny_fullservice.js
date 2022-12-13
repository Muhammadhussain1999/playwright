module.exports = {
  Phase: {
    Design_Id: "32362d60-3906-4f38-b650-252864c7f27a",
    Finish_Id: "f5aa313a-9e7d-4208-a122-bf22d9c84b7c",
    Hold_Id: "7f2be2e4-2bff-4b44-b71a-e30a415ca33f",
    Merge_Id: "a57b8708-06fe-44b6-a8dc-1c117848a8e7",
    RollOut_Id: "624802d5-7f05-41da-a564-3de0649ffda8",
    Startup_Id: "e26b8e23-0b34-44a5-8c72-43c098d20de8",
    Sustain_Id: "30df1137-9d03-47bf-a2ec-2f52c0024156",
  },

  Type: {
    Complience_Id: "f5aa313a-9e7d-4208-a122-bf22d9c84b7c",
    Customer_Id: "26532000-d6e0-40a5-ad88-65bcf3d5dd97",
    Marketing_Id: "9c9ad417-c607-4d3f-a591-07fe92a01139",
    OHS_Id: "6829b7cf-4431-46bb-a69c-cbea9a857454",
    Operations_Id: "f5e08ec9-89c9-4a08-b7d6-18d26ef2a04f",
    Organisational_Devolopment_Id: "96a3e3b4-4b96-4280-8129-44a417f07e91",
    Policy_Id: "d9c70885-a73e-426b-a906-a0c4a9d15656",
    Product_Id: "0a4c96bf-3860-4427-9346-3072e7c3c6d2",
    Regulatory_Id: "b05084fb-6e9f-4c83-9ab9-1cb0ebe3f454",
    Restructuring_Id: "cb0825fb-af14-42b1-9043-81d491eec2c6",
    Sales_Operations_Id: "be6ba0d0-2bcf-4ae7-9923-07d89417aedb",
    System_Update_Id: "e5187a89-21f6-43f8-b149-4262a85d22ed",
    Technology_Id: "fffa4d41-d332-446e-84f8-d16cbc487bc4",
    Training_Id: "bdd4a9e9-6f2f-46fe-8ca7-820f284ae04e",
  },
  companyFullservice() {
    return {
      email: "fullservice@df.co",
      password: "dffullservice",
    };
  },
  fake() {
    let num = Math.floor(Math.random() * 10000);
    return {
      email: "Test".concat(num).concat("@test.com"),
      password: "Tester",
    };
  },
};
