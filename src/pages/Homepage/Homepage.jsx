import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ProductCard from '../../components/ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import Specials from '../../components/Specials/Specials';
import axios from 'axios';


export default function Homepage() {

  const myAsyncFunction = () => {
    return new Promise((resolve,reject) => {
      // Async İşlem
      setTimeout(() => {
        //resolve("Veri Örneği") // İşlemin Başarılı Olması.
        reject("İstek Başarısız") // İşlemin Başarısız Olması.
      }, 3000) 
    })
  }

  useEffect(() => {
    thenCatchFinally();
    asyncAwait();
  },[]);

  useEffect(() => {
    // fetch("https://dummyjson.com/products")
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    //   .catch(err => console.log(err));

    // awaitFetch();

    axiosGet();
  }, []);
  
   const awaitFetch = async () => {
    let response = await fetch("https://dummyjson.com/products");
    let json = await response.json()
    console.log(json)
   }

  const asyncAwait = async () => {
    try {
      let response = await myAsyncFunction();
      console.log(response);
    }
    catch (e) {
      console.log(e)
    }
    finally {
      console.log("İşlem Bitti")
    }
    
  }
    

  const thenCatchFinally = () => {
    console.log("loading başladı")
    myAsyncFunction()
      .then(response => {
        console.log("Bir cevap geldi: ", response)})
      .catch(err => {
        console.log("Bir hata geldi: ", err)})
      .finally(() => {
        console.log("ASYNC işlem sonuclandı: ")
        console.log("loading bitti")
      })
  }

  const axiosGet = async () => {
    let response = await axios.get("https://dummyjson.com/products");
    console.log(response.data)
  }
  

  return (
    <>
      <div>Homepage</div>
      <div>
      <br/>
        <Link to={"/products"}>Ürünler Sayfası</Link>
        <Specials link="https://cdn.dsmcdn.com/ty1111/pimWidgetApi/mobile_20231229084702_2363929KadinMobile202311281701.jpg" desc="Kışa Hazırız" />
        <Specials link="https://cdn.dsmcdn.com/ty1115/pimWidgetApi/mobile_20231230230633_LufianYeniSezon2336867mobile.jpg" desc="Lufian - Yeni Sezon" />
        <Specials link="https://cdn.dsmcdn.com/ty1078/pimWidgetApi/mobile_20231206071303_GetAttachmentThumbnail1.jpg" desc="Outdoor Mont Seçimleri" />
      </div>
    </>
    
  )
}

