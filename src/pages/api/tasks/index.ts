import { NextApiRequest, NextApiResponse } from 'next';
import {conn} from '../../../utils/database';


// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  switch (method) {
    case "GET":
      return res.status(200).json(
        {
          "message": "getting tasks"
        }
      )
      break;
    case "POST":      
      const {title, description} = body;

      const query = "INSERT INTO tasks(title, description) VALUES($1, $2) RETURNING *";
      const values = [title, description];

      const response = await conn.query(query, values);

      console.log(response);

      return res.status(200).json(response.rows[0]);
      break;
      default:
        return res.status(400).json(
          {
            "message": "invalid method"
          }
        )
        break;
  }

  
};