import React from "react";
import { GroupMember, Order } from "../../types";
import { Tabs, Accordion, Box, Button } from '@mantine/core';
import { DefaultProps } from '@mantine/styles';
import { BsCardList, BsFillCartFill, BsFillGearFill } from "react-icons/bs";
import { ProductStoreType } from "types";
import { postData } from "utils/services";
import useSWR from 'swr'


const fetcher = (url:string) => fetch(url).then((res) => res.json())

export interface AccordionControlProps extends DefaultProps, React.ComponentPropsWithoutRef<'button'> {
  disabled?: boolean;
  chevron?: React.ReactNode;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  order: Order
}



function AccordionControl(props: AccordionControlProps) {
  const order = props.order

  const onDelete = (orderId : string) =>{
    postData('/api/deleteOrder', {orderId: orderId})
    .then((_r)=>location.reload())
  }


  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Accordion.Control {...props} />
      {order.orderStatus != 'completed'?
      (<div style={{ paddingLeft: '10px', paddingRight: '10px' }}>
      <Button >Change state</Button>
      </div>):null}
      <div style={{ paddingLeft: '10px', paddingRight: '10px' }}>
      <Button onClick={()=>onDelete(order.id)} color={'red'}>Delete order</Button>
      </div>
    </Box>
  );
}

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

const AdminPanel = () => {
  const { data, error } = useSWR('/api/getOrders', fetcher)

  const orders : Order[] = data
  
  if (error) return <div>Failed to load</div>
  if (!orders) return <div>Loading...</div>


  return (
    <section className="container">
      <div className="admin-panel">
        <Tabs defaultValue="Orders">
          <Tabs.List>
            <Tabs.Tab value="Orders" icon={<BsCardList size={14} />}>
              Orders
            </Tabs.Tab>
            <Tabs.Tab value="Products" icon={<BsFillCartFill size={14} />}>
              Products
            </Tabs.Tab>
            <Tabs.Tab value="Settings" icon={<BsFillGearFill size={14} />}>
              Settings
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="Orders" pt="xs">
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
                            <tr>
                              <th>Order id:</th>
                              <th>Price:</th>
                              <th>State:</th>
                            </tr>
                            <tr>
                              <td>{order.id}</td>
                              <td>{order.totalPrice} $</td>
                              <td>{order.orderStatus}</td>
                            </tr>
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
                                  <>
                                    <h2>{index + 1}#</h2>
                                    <table className="group-table">
                                      <tr>
                                        <th>First name:</th>
                                        <th>Last name:</th>
                                        <th>Age:</th>
                                        {index == 0 ? <th>Phone:</th> : null}
                                        {index == 0 ? <th>Email:</th> : null}
                                      </tr>
                                      <tr>
                                        <td>{member.firstName}</td>
                                        <td>{member.lastName}</td>
                                        <td>{member.age}</td>
                                        {index == 0 ? (
                                          <td>{member.phone}</td>
                                        ) : null}
                                        {index == 0 ? (
                                          <td>{member.email}</td>
                                        ) : null}
                                      </tr>
                                    </table>
                                  </>
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
          </Tabs.Panel>

          <Tabs.Panel value="messages" pt="xs">
            Messages tab content
          </Tabs.Panel>

          <Tabs.Panel value="settings" pt="xs">
            Settings tab content
          </Tabs.Panel>
        </Tabs>
      </div>
    </section>
  );
};

export default AdminPanel;
