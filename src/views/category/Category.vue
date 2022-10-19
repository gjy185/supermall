<template>
  <div class="wrapper">
    <ul class="content">
      <button @click="btnClick">按钮</button>
    <li>11</li>
    <li>12</li>
    <li>13</li>
    <li>14</li>
    <li>15</li>
    <li>16</li>
    <li>17</li>
    <li>18</li>
    <li>19</li>
    <li>110</li>
    <li>111</li>
    <li>112</li>
    <li>113</li>
    <li>114</li>
    <li>115</li>
    <li>116</li>
    <li>117</li>
    <li>118</li>
    <li>119</li>
    <li>120</li>
    <li>121</li>
    <li>122</li>
    <li>123</li>
    <li>124</li>
    <li>125</li>
    <li>126</li>
    <li>127</li>
    <li>128</li>
    <li>129</li>
    <li>130</li>
    <li>131</li>
    <li>132</li>
    <li>133</li>
    <li>134</li>
    <li>135</li>
    <li>136</li>
    <li>137</li>
    <li>138</li>
    <li>139</li>
    <li>140</li>
    <li>141</li>
    <li>142</li>
    <li>143</li>
    <li>144</li>
    <li>145</li>
    <li>146</li>
    <li>147</li>
    <li>148</li>
    <li>149</li>
    <li>150</li>
    <li>151</li>
    <li>152</li>
    <li>153</li>
    <li>154</li>
    <li>155</li>
    <li>156</li>
    <li>157</li>
    <li>158</li>
    <li>159</li>
    <li>160</li>
    <li>161</li>
    <li>162</li>
    <li>163</li>
    <li>164</li>
    <li>165</li>
    <li>166</li>
    <li>167</li>
    <li>168</li>
    <li>169</li>
    <li>170</li>
    <li>171</li>
    <li>172</li>
    <li>173</li>
    <li>174</li>
    <li>175</li>
    <li>176</li>
    <li>177</li>
    <li>178</li>
    <li>179</li>
    <li>180</li>
    <li>181</li>
    <li>182</li>
    <li>183</li>
    <li>184</li>
    <li>185</li>
    <li>186</li>
    <li>187</li>
    <li>188</li>
    <li>189</li>
    <li>190</li>
    <li>191</li>
    <li>192</li>
    <li>193</li>
    <li>194</li>
    <li>195</li>
    <li>196</li>
    <li>197</li>
    <li>198</li>
    <li>199</li>
    <li>1100</li>
  </ul>
  </div>
</template>

<script>

import BScroll from 'better-scroll'

export default {
  name: 'Category',
  data () {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(document.querySelector('.wrapper'), {
      // probe 侦测
      // 0,1都是不侦测实时的位置
      // 2：在手指滚动的过程中侦测，手指离开时不侦测
      // 3：只要是滚动，都侦测
      probeType: 3,
      PullUpLoad: true,
    })
    this.scroll.on('scroll', (position) => {
      console.log(position);
    })
    // scrollEnd  pullingUp
    this.scroll.on('scrollEnd', () => {
      console.log('上拉加载更多');
    })
  },
  methods: {
    btnClick() {
      console.log( 'btnClick');
    }
  }
}

</script>

<style>
.wrapper {
  height: 200px;
  background-color: red;

  overflow: hidden;
}
</style>
