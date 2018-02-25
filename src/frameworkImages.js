var FrameworkImages = 
[{
  name:'TensorFlow',
  details: "Ubuntu 16.04 - Python 3.5 - Jupyter Notebook",
  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/115px-Tensorflow_logo.svg.png",
  image: "acmuiuc/tensorflow:latest",
  token_required: true
},{
  name:'Caffe2',
  details: "Ubuntu 16.04 - Python 3.5 - Jupyter Notebook",
  img: "https://caffe2.ai/static/logo.svg",
  image: "acmuiuc/caffe2:latest",
  token_required: true
},{
  name:'PyTorch',
  details: "Ubuntu 16.04 - Python 3.6 - Jupyter Notebook",
  img: "http://pytorch.org/static/img/pytorch-logo-dark.svg",
  image: "acmuiuc/pytorch:v0.2",
  token_required: true
},{
  name:'Keras',
  details: "Ubuntu 16.04 - Python 3.5 - Jupyter Notebook",
  img: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Keras_Logo.jpg",
  image: "acmuiuc/keras:latest",
  token_required: true 
},{
  name:'NVIDIA Digits',
  details: "Ubuntu 16.04 - In Browser GUI",
  img: "https://www.scan.co.uk/images/3xs/infopages/nvidia-digits.png",
  image: "acmuiuc/digits:latest"
},{
  name:'Caffe',
  details: "Ubuntu 16.04 - C++ - SSH",
  img: "http://antmicro.com/images/logos/products-tk-caffe.svg",
  image: "nvidia/caffe"
},{
  name:'mxnet',
  details: "Ubuntu 16.04 - Python 3.5 - Jupyter Notebook",
  img: "https://pbs.twimg.com/profile_images/921441672684171264/ElXb2HlG_400x400.jpg",
  image: "acmuiuc/mxnet",
  token_required: true
},{
  name:'CNTK',
  details: "Ubuntu 16.04 - Python 3.5 - Jupyter Notebook",
  img: "https://blog.paperspace.com/content/images/2016/12/cntk.png",
  image: "acmuiuc/cntk",
  token_required: true
},{
  name:'Dockerfile',
  details: null,
  img: "https://cdn.worldvectorlogo.com/logos/docker.svg",
  image: null
}]

module.exports = FrameworkImages;
