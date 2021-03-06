
export default function customResponses () {
  return (req, res, next) => {
    res.ok = (resp, msg) => {
      return res.status(200).json({
        success: true,
        response: resp,
        message: msg,
      });
    };

    res.created = (resp, msg) => {
      return res.status(201).json({
        success: true,
        response: resp,
        message: msg,
      });
    };

    res.badRequest = (err, resp, msg) => {
      return res.status(400).json({
        errors: err,
        response: resp,
        message: msg,
      });
    };

    res.unauthorized = (err, resp, msg) => {
      return res.status(401).json({
        errors: err,
        response: resp,
        message: msg,
      });
    };

    res.forbidden = (err, resp, msg) => {
      return res.status(403).json({
        errors: err,
        response: resp,
        message: msg,
      });
    };

    res.notFound = (err, resp, msg) => {
      return res.status(404).json({
        errors: err,
        response: resp,
        message: msg,
      });
    };

    res.serverError = (err, resp, msg) => {
      return res.status(500).json({
        errors: err,
        response: resp,
        message: msg,
      });
    };

    next();
  };
}
