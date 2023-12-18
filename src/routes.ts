import { RequestHandler, Request, Response } from 'express';

/**
 * 定義 RouteItem 的格式，你們很聰明應該看得懂吧！！ BY Hyman
 */
export interface IRouteItem {
  path: string;
  method: 'get' | 'post' | 'put' | 'delete';
  middlewares: RequestHandler[];
}

/**
 * 所有 application 裡面的 routes 陣列，格式請參考 IRouteItem
 */
export const AppRoutes: IRouteItem[] = [
  {
    path: '/',
    method: 'get',
    middlewares: [
      (req, res) => {
        res.status(200).send('Hello this is Doryyyyyyy');
      },
    ],
  },
];
