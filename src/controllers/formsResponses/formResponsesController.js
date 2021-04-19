
import { getDeveloperResponses } from '../../services/typeformService';

export function getForm(req, res) {
  console.log('6666');
  res.send('about birds');
}

export async function developerResponses(req, res) {
  try {
    console.log('$$$$$');
    const responses = await getDeveloperResponses();
    return res.status(200).json(responses);
  } catch(err) {
    console.log(err);
  }
} 