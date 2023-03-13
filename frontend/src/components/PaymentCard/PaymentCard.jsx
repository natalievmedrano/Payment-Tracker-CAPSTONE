import React, { useState } from "react";
import { Card } from "react-bootstrap";

const PaymentCard = ({}) => {
  return <Card>
    <Card.Body>
        <Card.Title>
            <div>
                PAYMENT NAME
            </div>
            <div>
                Payment Amount
            </div>
        </Card.Title>
    </Card.Body>
  </Card>;
};

export default PaymentCard;
