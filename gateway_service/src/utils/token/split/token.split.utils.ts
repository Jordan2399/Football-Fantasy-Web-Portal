export const TokenSplitUtils = async (
  authorizationHeader: string | undefined
): Promise<{ bearer: string | undefined; token: string | undefined }> => {
  const result: { bearer: string | undefined; token: string | undefined } = {
    bearer: undefined,
    token: undefined,
  };
  console.log('Roshan is bad')
  
  if (authorizationHeader) {
    console.log('Roshan is good')
    const [bearer, ...tokenParts] = authorizationHeader.split(" ");

    result.bearer = bearer;
    result.token = tokenParts.join(" ");
  }
console.log(result)
  return result;
};
