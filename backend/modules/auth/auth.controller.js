import * as AuthService from "./auth.service.js";

export async function register(req, res) {
  try {
    const user = await AuthService.registerUser(req.body);
    res.status(201).json({
      success: true,
      data: user,
      message: "User registered successfully"
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    })
  }
}

export async function login(req, res) {
  try {
    const result = await AuthService.loginUser(req.body);
    res.json({
      success: true,
      token: result.token,
      user: result.user
    })
  } catch (error) {
    
  }
  
}