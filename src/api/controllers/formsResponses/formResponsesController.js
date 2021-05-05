
import { getDeveloperResponses, getClientResponses } from '../../../services/typeformService';

export async function developerResponses(req, res) {
  try {
    const responses = await getDeveloperResponses(req.query);
    res.ok(responses, 'Successfully retrieved responses');
  } catch(err) {
    res.badRequest(err.message, null, 'Error retreiving responses');
  }
}

export async function clientResponses(req, res) {
  try {
    const responses = await getClientResponses();
    res.ok(responses, 'Successfully retrieved responses');
  } catch(err) {
    res.badRequest(err.message, null, 'Error retreiving responses');
  }
}

export async function matchingResponses(req, res) {
  try {
    const responses = await getClientResponses();
    res.ok(responses, 'Successfully retrieved responses');
  } catch(err) {
    res.badRequest(err.message, null, 'Error retreiving responses');
  }
}