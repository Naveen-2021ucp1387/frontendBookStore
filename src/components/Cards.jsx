// import React from "react";

// function Cards({ item }) {
//   return (
//     <>
//       <div className="mt-4 my-3 p-3">
//         <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
//           <figure>
//             <img src={item.image} alt="Shoes" />
//           </figure>
//           <div className="card-body">
//             <h2 className="card-title">
//               {item.name}
//               <div className="badge badge-secondary">{item.category}</div>
//             </h2>
//             <p>{item.title}</p>
//             <div className="card-actions justify-between">
//               <div className="badge badge-outline">${item.price}</div>
//               <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
//                 Buy Now
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cards;

// import React from "react";
// import axios from "axios";

// function Cards({ item }) {
//   const paymentHandler = async () => {
//     const options = {
//       key: "lK5jUNI4oWvBz7H9qr3Avdzp",
//       amount: (item.price * 100).toString(), // Amount in paise
//       currency: "INR",
//       description: "Purchase Description",
//       image: "https://example.com/your_logo.png",
//       prefill: {
//         name: "Customer Name",
//         email: "customer@example.com",
//         contact: "9999999999",
//       },
//       handler: function (response) {
//         alert(`Payment ID: ${response.razorpay_payment_id}`);
//         // Optionally, you can make an API call to your backend to update the payment status
//       },
//       modal: {
//         ondismiss: function () {
//           console.log("Payment dismissed");
//         },
//       },
//     };

//     await axios
//       .post("http://localhost:4000/order", {
//         amount: item.price,
//         currency: "INR",
//         receiptId: "UniqueReceiptId",
//       })
//       .then((response) => {
//         console.log(response.data);
//         options.order_id = response.data.id;
//         const rzp = new window.Razorpay(options);
//         rzp.open();
//       })
//       .catch((err) => {
//         if (err) {
//           console.log(err);
//           console.error("Error processing payment:", error);
//         }
//       });
//     // try {
//     //   const response = await axios.post("http://localhost:4000/order", {
//     //     amount: item.price, // Pass item price to your backend
//     //     currency: "INR", // or any other currency
//     //     receiptId: "UniqueReceiptId", // Generate a unique receipt ID for each transaction
//     //   });
//     //   options.order_id = response.data.id; // Get order ID from your backend response
//     //   const rzp = new window.Razorpay(options);
//     //   rzp.open();
//     // } catch (error) {
//     //   console.error("Error processing payment:", error);
//     // }
//     /*
//     await axios
//       .post("http://localhost:4000/order",  {
//         amount: item.price,
//         currency: "INR",
//         receiptId: "UniqueReceiptId",
//       })
//       .then((response) => {
//         console.log(response.data);
//          options.order_id = response.data.id; // Get order ID from your backend response
//       const rzp = new window.Razorpay(options);
//       rzp.open();
//         }
//       })
//       .catch((err) => {
//         if (err.response) {
//           console.log(err);
//       console.error("Error processing payment:", error);

//         }
//       });
//       */
//   };

//   return (
//     <div className="mt-4 my-3 p-3">
//       <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
//         <figure>
//           <img src={item.image} alt="Shoes" />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title">
//             {item.name}
//             <div className="badge badge-secondary">{item.category}</div>
//           </h2>
//           <p>{item.title}</p>
//           <div className="card-actions justify-between">
//             <div className="badge badge-outline">${item.price}</div>
//             <div
//               className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200"
//               onClick={paymentHandler} // Call paymentHandler on button click
//             >
//               Buy Now
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cards;
// import React from "react";
// import axios from "axios";

// function Cards({ item }) {
//   const paymentHandler = async () => {
//     if (item.price < 1) {
//       alert("The amount should be at least ₹1");
//       return;
//     }

//     const options = {
//       key: "lK5jUNI4oWvBz7H9qr3Avdzp",
//       amount: (item.price * 100).toString(), // Amount in paise
//       currency: "INR",
//       description: "Purchase Description",
//       image: "https://example.com/your_logo.png",
//       prefill: {
//         name: "Customer Name",
//         email: "customer@example.com",
//         contact: "9999999999",
//       },
//       handler: function (response) {
//         alert(`Payment ID: ${response.razorpay_payment_id}`);
//       },
//       modal: {
//         ondismiss: function () {
//           console.log("Payment dismissed");
//         },
//       },
//     };

//     try {
//       const response = await axios.post("http://localhost:4000/order", {
//         amount: item.price,
//         currency: "INR",
//         receiptId: "UniqueReceiptId",
//       });
//       console.log(response.data);
//       options.order_id = response.data.id;
//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       console.error("Error processing payment:", err);
//     }
//   };

//   return (
//     <div className="mt-4 my-3 p-3">
//       <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
//         <figure>
//           <img src={item.image} alt="Shoes" />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title">
//             {item.name}
//             <div className="badge badge-secondary">{item.category}</div>
//           </h2>
//           <p>{item.title}</p>
//           <div className="card-actions justify-between">
//             <div className="badge badge-outline">${item.price}</div>
//             <div
//               className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200"
//               onClick={paymentHandler}
//             >
//               Buy Now
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cards;

import React from "react";
import axios from "axios";

function Cards({ item }) {
  const paymentHandler = async () => {
    const options = {
      key: "lK5jUNI4oWvBz7H9qr3Avdzp", // Use your Razorpay key here
      amount: (item.price * 100).toString(), // Amount in paise
      currency: "INR",
      description: "Purchase Description",
      image: "https://example.com/your_logo.png",
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      handler: function (response) {
        alert(`Payment ID: ${response.razorpay_payment_id}`);
      },
      modal: {
        ondismiss: function () {
          console.log("Payment dismissed");
        },
      },
    };

    try {
      const response = await axios.post("http://localhost:4000/order", {
        amount: item.price * 100, // Ensure this is in the smallest currency unit (paise)
        currency: "INR",
        receipt: "receipt#1",
      });

      console.log(response.data);

      options.order_id = response.data.id;

      if (typeof window.Razorpay !== "undefined") {
        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        console.error("Razorpay SDK not loaded");
      }
    } catch (err) {
      console.error("Error processing payment:", err);
    }
  };

  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div
              className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200"
              onClick={paymentHandler}
            >
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
