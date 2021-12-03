import { NextApiRequest, NextApiResponse } from 'next'

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  
  const { method } = req;

  switch (method) {
    case 'GET':
      return res.status(200).json(
        {      
          "task": "getting a unique task"    
        }
      )    
      break;
    case 'PUT':
      return res.status(200).json(
        {      
          "task": "updating a unique task"    
        }
      )    
      break;
    case 'DELETE':
      return res.status(200).json(
        {      
          "task": "deleting a unique task"    
        }
      )    
      break;
    default:
      return res.status(400).json({
        "message": "method not allowed"
      })
      break;
  }

  
}