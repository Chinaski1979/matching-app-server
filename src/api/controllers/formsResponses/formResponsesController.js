
import { getDeveloperResponses } from '../../../services/typeformService';

export async function developerResponses(req, res) {
  try {
    const responses = await getDeveloperResponses();
    res.ok(responses, 'Successfully retrieved responses');
  } catch(err) {
    console.log(err);
  }
}

export async function clientResponses(req, res) {
  try {
    const responses = await getClientResponses();
    res.ok(responses, 'Successfully retrieved responses');
  } catch(err) {
    console.log(err);
  }
}