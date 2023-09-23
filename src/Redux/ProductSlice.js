import { createSlice } from "@reduxjs/toolkit";
import t1 from "../../public/t1.png";
import t2 from "../../public/t2.png";
import t3 from "../../public/t3.png";
import t4 from "../../public/t4.png";
import t5 from "../../public/t5.png";
import t6 from "../../public/t6.png";

const initialState = [
  {
    id: 1,
    img: t1,
    title: "Regular fit slogan",
    desc: "The name says it all, The right size slightly snugs the body leaving enough room for comfort in the sleeves and waist.",
    price: "INR 1,190",
  },
  {
    id: 2,
    img: t2,
    title: "Regular fit polo",
    desc: "The name says it all, The right size slightly snugs the body leaving enough room for comfort in the sleeves and waist.",
    price: "INR 1,100  -52%",
  },
  {
    id: 3,
    img: t3,
    title: "Regular fit  block",
    desc: "The name says it all, The right size slightly snugs the body leaving enough room for comfort in the sleeves and waist.",
    price: "INR 1,690",
  },
  {
    id: 4,
    img: t4,
    title: "Regular fit v-neck",
    desc: "The name says it all, The right size slightly snugs the body leaving enough room for comfort in the sleeves and waist.",
    price: "INR 1,290",
  },
  {
    id: 5,
    img: t5,
    title: "Regular fit slogan",
    desc: "The name says it all, The right size slightly snugs the body leaving enough room for comfort in the sleeves and waist.",
    price: "INR 1,190",
  },
  {
    id: 6,
    img: t6,
    title: "Regular fit slogan",
    desc: "The name says it all, The right size slightly snugs the body leaving enough room for comfort in the sleeves and waist.",
    price: "INR 1,190",
  },
];

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
  },
});

export default productSlice.reducer;
