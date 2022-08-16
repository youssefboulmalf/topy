import React, { useState } from "react";
import { Order } from "../../../types";
import { postData } from "../../../utils/services";
import { DefaultProps } from "@mantine/styles";
import { Box, Button, Modal, Accordion } from "@mantine/core";

export interface AccordionControlProps
  extends DefaultProps,
    React.ComponentPropsWithoutRef<"button"> {
  disabled?: boolean;
  chevron?: React.ReactNode;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  order: Order;
}

function AccordionControl(props: AccordionControlProps) {
  const [opened, setOpened] = useState(false);

  const order = props.order;

  const onDelete = (orderId: string) => {
    postData("/api/deleteOrder", { orderId: orderId }).then((_r) =>
      location.reload()
    );
  };

  const onChangeStatus = (orderId: string, orderStatus: string) => {
    postData("/api/changeStatus", {
      orderId: orderId,
      orderStatus: orderStatus,
    }).then((_r) => location.reload());
  };

  // const onSendPayment = (orderId: string) =>{
  //   postData('/api/createPaymentLink',{orderId: orderId}).then((_r)=>{
  //     onChangeStatus(orderId, 'contacted');
  //   })

  // }
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center"}}>
        <Accordion.Control {...props} />
        {order.orderStatus != "completed" ? (
          <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
            <Button onClick={() => onChangeStatus(order.id, order.orderStatus)}>
              Change status
            </Button>
          </div>
        ) : null}
        <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
          <Button onClick={() => setOpened(true)} color={"red"}>
            Delete order
          </Button>
        </div>
      </Box>
      <Modal centered opened={opened} onClose={() => setOpened(false)}>
        <p>You are about to delete this order. Are you sure?</p>
        <div style={{ marginTop: "40px" }}>
          <Button onClick={() => onDelete(order.id)} color={"red"}>
            Yes I'm sure
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default AccordionControl;
