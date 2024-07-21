enum PERMISSIONS {
    USER = 'user',
    ADMIN = 'admin',
    ANONYMOUS = 'anonymous',
}

enum LANGUAGE_TYPE {
    EN = 'en',
    DE = 'de',
    JA = 'ja',
    KO = 'ko',
    ZH = 'zh',
    ES = 'es',
    FR = 'fr',
    PT = 'pt',
    NL = 'nl',
    TR = 'tr'
}
  
enum PRIMARY_BUTTON {
    externalLogin = 'externalLogin',
    socialLogin = 'socialLogin',
    emailLogin = 'emailLogin'
}

export { PERMISSIONS, LANGUAGE_TYPE, PRIMARY_BUTTON };