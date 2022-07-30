import React from "react";
import { Tabs } from '@mantine/core';
import { BsCardList, BsFillCartFill, BsFillGearFill } from "react-icons/bs";
import OrderTab from './order-tab'
import ProductTab from './product-tab'







const AdminPanel = () => {


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
            <OrderTab/>
          </Tabs.Panel>

          <Tabs.Panel value="Products" pt="xs">
            <ProductTab />
          </Tabs.Panel>

          <Tabs.Panel value="Settings" pt="xs">
            Nothing here yet..
          </Tabs.Panel>
        </Tabs>
      </div>
    </section>
  );
};

export default AdminPanel;
