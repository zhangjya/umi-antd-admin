declare namespace LOGIN {
  interface LoginParams {
    /** 
  1 */
    account?: string;
    password?: string;
  }

  interface LoginResult {
    token?: string;
  }
}
