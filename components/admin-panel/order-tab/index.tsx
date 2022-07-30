import React from "react";
import { ProductStoreType } from "../../../types";
import AccordionControl from '../accordion-control'
import { Accordion } from '@mantine/core';
import dayjs from "dayjs";
import { GroupMember, Order } from "../../../types";
import useSWR from 'swr'

const accordionStyle = {
    item: {
      padding: '10px 20px',
      backgroundColor: 'rgba(255, 255, 255, 0.12)',
      border: '1px solid #ededed',
      '&[data-active]': {
        backgroundColor: '#ccc',
      },
    },
  
    chevron: {
      '&[data-rotate]': {
        transform: 'rotate(-90deg)',
      },
    },
  }

  const fetcher = (url:string) => fetch(url).then((res) => res.json())

const OrderTab = () => {

    const { data, error } = useSWR('/api/getOrders', fetcher)

    const orders : Order[] = data
    
    if (error) return <div>Failed to load</div>
    if (!orders) return <div>Loading...</div>


  return (
    <div className="admin-panel__order-section">
      <div className="order-section_table">
        <Accordion
          variant="separated"
          radius="md"
          defaultValue="customization"
          styles={accordionStyle}
        >
          {orders.map((order, index) => {
            return (
              <Accordion.Item key={index} value={`${index}`}>
                <AccordionControl order={order}>
                  <table className="order-table">
                    <thead>
                      <tr>
                        <th>Order id:</th>
                        <th>Price:</th>
                        <th>State:</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{order.id}</td>
                        <td>{order.totalPrice} $</td>
                        <td>{order.orderStatus}</td>
                      </tr>
                    </tbody>
                  </table>
                </AccordionControl>
                <Accordion.Panel>
                  <div className="items">
                    <h2 className="orderDetail-head">Items:</h2>
                    <ul className="checkout-items">
                      {order.orderDetails.items.map(
                        (item: ProductStoreType, index: number) => (
                          <li key={index} className="checkout-item">
                            <div className="checkout-item__content">
                              <div className="checkout-item__img">
                                <img src={item.thumb} />
                              </div>

                              <div className="checkout-item__data">
                                <h3>{item.name}</h3>
                                <span>#{item.id}</span>
                              </div>
                            </div>
                            <h3>{dayjs(item.date).format("DD/MM/YYYY")}</h3>
                            <h3>{item.count}x</h3>
                            <h3>${item.price}</h3>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className="group">
                    <h2 className="orderDetail-head">group:</h2>
                    <ul className="checkout-items">
                      {order.orderDetails.groupInfo.map(
                        (member: GroupMember, index: number) => (
                          <div className="group-member-info" key={index}>
                            <h2>{index + 1}#</h2>
                            <table className="group-table">
                              <thead>
                                <tr>
                                  <th>First name:</th>
                                  <th>Last name:</th>
                                  <th>Age:</th>
                                  <th>Phone:</th>
                                  <th>Email:</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>{member.firstName}</td>
                                  <td>{member.lastName}</td>
                                  <td>{member.age}</td>
                                  <td>{index == 0 ? member.phone : "❌"}</td>
                                  <td>{index == 0 ? member.email : "❌"}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        )
                      )}
                    </ul>
                  </div>
                </Accordion.Panel>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default OrderTab
