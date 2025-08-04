"use client"
import CartItem from "../cartItem/CartItem";
import {
    RiArrowRightLine,
    RiDeleteBin2Line,
    RiShieldCheckFill,
} from "react-icons/ri";
import { useContext, useEffect, useRef, useState } from "react";
import OrderFormComp from "../Form/OrderFormComp";
import { useRouter } from 'next/navigation';
import {
    MyContext
} from '@/contexts/MyContextProvider';
import { ExtraCharge } from "@/constans/ExtraCharge";


function UserCart({ data, setData }) {
    const [isActive, setIsActive] = useState(false);
    const orderFormRef = useRef(null);
    const router = useRouter();
    const { setCount } = useContext(MyContext);

    useEffect(() => {
        if (isActive && orderFormRef.current) {
            orderFormRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isActive]);

    const handleContinueShopping = () => {
        router.back();
    };

    const handleDeleteProduct = async (productId) => {
        try {
            const cartData = JSON.parse(localStorage.getItem("cart")) || [];
            const updatedCartData = cartData.filter((item) => item.id !== productId);
            localStorage.setItem("cart", JSON.stringify(updatedCartData));

            setCount(updatedCartData.length)
            setData(updatedCartData);
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    const handleCheckoutClick = () => {
        setIsActive(true);
    };

    const handleDecrement = (productId) => {
        try {
            const cartData = JSON.parse(localStorage.getItem("cart")) || [];
            const updatedCartData = cartData.map((item) =>
                item.id === productId
                    ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                    : item
            );
            localStorage.setItem("cart", JSON.stringify(updatedCartData));

            const updatedProductsData = data.map((product) =>
                product.id === productId
                    ? { ...product, quantity: Math.max(1, product.quantity - 1) }
                    : product
            );
            setData(updatedProductsData);
        } catch (error) {
            console.error("Error decrementing product quantity:", error);
        }
    };

    const handleIncrement = (productId) => {
        try {
            const cartData = JSON.parse(localStorage.getItem("cart")) || [];
            const updatedCartData = cartData.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            );
            localStorage.setItem("cart", JSON.stringify(updatedCartData));

            const updatedProductsData = data.map((product) =>
                product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
            );
            setData(updatedProductsData);
        } catch (error) {
            console.error("Error incrementing product quantity:", error);
        }
    };

    const totalAmount = data.reduce((acc, product) => {
        return acc + (product.price * product.quantity)
    }, 0);



    const finalTotal = totalAmount;

    const handleDeleteAll = () => {
        try {
            localStorage.removeItem("cart");
            setData(null);
            setIsActive(false);
            setCount(0)
        } catch (error) {
            console.error("Error deleting all products:", error);
        }
    };

    return (
        <div className="my-2">
            <h3 className="mb-4 text-xl font-medium">Корзина ({data.length})</h3>

            <div className="flex sd:flex-row xz:flex-col gap-6 mb-10">
                <div className="flex-1 rounded-lg border border-gray-300 p-4 bg-white flex flex-col gap-6">
                    {
                        data && data.map(el => {
                            return (
                                <CartItem
                                    product={el}
                                    key={el.id}

                                    onDelete={handleDeleteProduct}
                                    onDecrement={handleDecrement}
                                    onIncrement={handleIncrement}
                                />
                            )
                        })
                    }
                    <div className="mt-8 flex sd:flex-row xz:flex-col justify-between">
                        <button
                            className="btn btn-sm btn-error btn-outline capitalize sd:mb-0 xz:mb-5"
                            onClick={handleDeleteAll}
                        >
                            <RiDeleteBin2Line fontSize={20} /> Удалить всё
                        </button>
                        <button
                            className="btn btn-sm btn-secondary btn-outline capitalize"
                            onClick={handleContinueShopping}
                        >
                            Продолжить покупки <RiArrowRightLine fontSize={20} />
                        </button>
                    </div>


                    <div className='xz:text-xs sd:text-base font-semibold mt-5'>
                        <p className=''>
                            Бесплатная доставка осуществляется при заказе на сумму от 500 рублей.
                        </p>
                    </div>


                </div>
                <div className="sd:w-[20rem] xz:w-full flex flex-col gap-6">
                    <div className="rounded-lg border border-gray-300 p-4 bg-white text-gray-600 flex flex-col">
                        <span className="pb-2">Есть промокод?</span>
                        <div className="join">
                            <input
                                type="text"
                                className="w-full input input-bordered input-sm join-item"
                                placeholder="Введите код"
                            />
                            <button className="join-item btn btn-sm btn-outline">Применить</button>
                        </div>
                    </div>
                    <div className="rounded-lg border border-gray-300 p-4 bg-white text-gray-600 flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                            <span>Сумма покупки:</span>
                            <span>{totalAmount.toFixed(2)} руб</span>
                        </div>

                        <hr className="my-2" />
                        <div className="flex items-center justify-between font-semibold my-2">
                            <span>Итого:</span>
                            <span>{finalTotal.toFixed(2)} руб.</span>
                        </div>
                        <button
                            className="btn bg-green-500 capitalize text-base"
                            onClick={handleCheckoutClick}
                        >
                            Оформить заказ
                        </button>
                        <div className="pt-4 flex items-center gap-3 text-xs text-gray-500">
                            <RiShieldCheckFill fontSize={22} />
                            Гарантия заказа.
                        </div>
                    </div>
                </div>
            </div>
            {
                isActive ?
                    <OrderFormComp ref={orderFormRef} data={data} setData={setData} setIsActive={setIsActive} />
                    :
                    null
            }

        </div>
    )
}

export default UserCart
