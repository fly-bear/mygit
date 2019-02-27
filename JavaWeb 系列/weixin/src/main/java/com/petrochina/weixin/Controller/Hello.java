package com.petrochina.weixin.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.security.MessageDigest;
import java.util.Arrays;

@RestController
public class Hello {
    @RequestMapping("/validation")
    public String hello(@RequestParam("signature") String signature,@RequestParam("timestamp") String timestamp,@RequestParam("nonce") String nonce,@RequestParam("echostr") String echostr){
        String token = "hyggbgb";
        System.out.println("signature:"+signature);
        System.out.println("timestamp:"+timestamp);
        System.out.println("nonce:"+nonce);
        System.out.println("echostr:"+echostr);
        String[] params = new String[] { token, timestamp, nonce };
        Arrays.sort(params);
        String clearText = params[0] + params[1] + params[2];
        String algorithm = "SHA-1";
        String result="";
        try {
            String sign = new String(org.apache.commons.codec.binary.Hex.encodeHex(MessageDigest.getInstance(algorithm).digest((clearText).getBytes()), true));
            // 开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
            if (signature.equals(sign)) {
                result = echostr;
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return (result);
    }
}
