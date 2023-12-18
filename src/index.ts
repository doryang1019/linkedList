import { delay, ServiceBusClient, ServiceBusMessage } from '@azure/service-bus';
import axios from 'axios';
import * as dotenv from 'dotenv';
import { Node } from './Node';
import { LinkedList } from './LinkedList';
import { Tree } from './TreeNode';
import { doubleNode, doublyLinkedList } from './doublyLinkedList';
dotenv.config();

const triggerByArry = [
  'Release To Layout',
  'PLM BOM',
];

const main = async () => {
  let t = new doublyLinkedList(1);
  t.push(4);
  t.shift(5);
  // console.log(JSON.stringify(t));
  console.log(t);

  // create a Service Bus client using the connection string to the Service Bus namespace

};

// call the main function
main().catch((err) => {
  console.log('Error occurred: ', err);
  process.exit(1);
});
