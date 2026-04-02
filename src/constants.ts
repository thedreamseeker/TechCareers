export interface Company {
  id: string;
  name: string;
  description: string;
  careersUrl: string;
  logo: string;
  category: 'AI' | 'Big Tech' | 'Fintech' | 'Software' | 'Hardware';
}

export const COMPANIES: Company[] = [
  // Big Tech
  {
    id: 'google',
    name: 'Google',
    description: 'A global leader in search, advertising, cloud computing, and artificial intelligence.',
    careersUrl: 'https://www.google.com/about/careers/applications/jobs/results/',
    logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
    category: 'Big Tech'
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    description: 'A multinational technology corporation known for software, hardware, and cloud services.',
    careersUrl: 'https://careers.microsoft.com/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
    category: 'Big Tech'
  },
  {
    id: 'meta',
    name: 'Meta',
    description: 'Building technologies that help people connect, find communities, and grow businesses.',
    careersUrl: 'https://www.metacareers.com/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
    category: 'Big Tech'
  },
  {
    id: 'amazon',
    name: 'Amazon',
    description: 'A global leader in e-commerce, cloud computing, digital streaming, and artificial intelligence.',
    careersUrl: 'https://www.amazon.jobs/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    category: 'Big Tech'
  },
  {
    id: 'apple',
    name: 'Apple',
    description: 'Designs, manufactures, and markets smartphones, personal computers, tablets, and wearables.',
    careersUrl: 'https://www.apple.com/careers/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    category: 'Big Tech'
  },
  {
    id: 'netflix',
    name: 'Netflix',
    description: 'The world\'s leading streaming entertainment service with over 200 million paid memberships.',
    careersUrl: 'https://jobs.netflix.com/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    category: 'Big Tech'
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    description: 'The global leader in customer relationship management (CRM) software.',
    careersUrl: 'https://www.salesforce.com/company/careers/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
    category: 'Big Tech'
  },
  {
    id: 'adobe',
    name: 'Adobe',
    description: 'Changing the world through digital experiences with creative, marketing, and document solutions.',
    careersUrl: 'https://www.adobe.com/careers.html',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Adobe_Corporate_logo.svg',
    category: 'Big Tech'
  },
  {
    id: 'oracle',
    name: 'Oracle',
    description: 'A cloud technology company that provides organizations around the world with computing infrastructure.',
    careersUrl: 'https://www.oracle.com/corporate/careers/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
    category: 'Big Tech'
  },
  {
    id: 'ibm',
    name: 'IBM',
    description: 'A global technology and innovation company headquartered in Armonk, NY.',
    careersUrl: 'https://www.ibm.com/employment/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    category: 'Big Tech'
  },

  // AI
  {
    id: 'openai',
    name: 'OpenAI',
    description: 'An AI research and deployment company behind ChatGPT and GPT-4.',
    careersUrl: 'https://openai.com/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg',
    category: 'AI'
  },
  {
    id: 'anthropic',
    name: 'Anthropic',
    description: 'An AI safety and research company that builds reliable, interpretable, and steerable AI systems.',
    careersUrl: 'https://www.anthropic.com/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Anthropic_logo.svg/2560px-Anthropic_logo.svg.png',
    category: 'AI'
  },
  {
    id: 'huggingface',
    name: 'Hugging Face',
    description: 'The platform where the machine learning community collaborates on models, datasets, and apps.',
    careersUrl: 'https://huggingface.co/jobs',
    logo: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg',
    category: 'AI'
  },
  {
    id: 'cohere',
    name: 'Cohere',
    description: 'Providing industry-leading large language models (LLMs) for enterprise applications.',
    careersUrl: 'https://cohere.com/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Cohere_logo.svg/2560px-Cohere_logo.svg.png',
    category: 'AI'
  },
  {
    id: 'mistral',
    name: 'Mistral AI',
    description: 'A European AI company developing high-performance open-weight models.',
    careersUrl: 'https://mistral.ai/news/jobs/',
    logo: 'https://mistral.ai/images/logo.svg',
    category: 'AI'
  },
  {
    id: 'perplexity',
    name: 'Perplexity AI',
    description: 'An AI-powered search engine that provides direct answers with cited sources.',
    careersUrl: 'https://www.perplexity.ai/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Perplexity_AI_logo.svg/2560px-Perplexity_AI_logo.svg.png',
    category: 'AI'
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'An independent research lab exploring new mediums of thought and expanding imaginative powers.',
    careersUrl: 'https://www.midjourney.com/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.svg',
    category: 'AI'
  },
  {
    id: 'characterai',
    name: 'Character.ai',
    description: 'Building the next generation of conversational AI and personalized agents.',
    careersUrl: 'https://character.ai/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Character.ai_logo.svg/2560px-Character.ai_logo.svg.png',
    category: 'AI'
  },
  {
    id: 'scaleai',
    name: 'Scale AI',
    description: 'The data infrastructure for AI, providing high-quality training data for machine learning.',
    careersUrl: 'https://scale.com/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Scale_AI_logo.svg/2560px-Scale_AI_logo.svg.png',
    category: 'AI'
  },
  {
    id: 'groq',
    name: 'Groq',
    description: 'Developing the LPU Inference Engine for ultra-fast AI model execution.',
    careersUrl: 'https://groq.com/careers/',
    logo: 'https://groq.com/wp-content/uploads/2023/10/Groq_Logo_Black.svg',
    category: 'AI'
  },
  {
    id: 'coreweave',
    name: 'CoreWeave',
    description: 'A specialized cloud provider delivering massive scale for AI and machine learning.',
    careersUrl: 'https://www.coreweave.com/careers',
    logo: 'https://www.coreweave.com/hubfs/CoreWeave_Logo_Black.svg',
    category: 'AI'
  },
  {
    id: 'datarobot',
    name: 'DataRobot',
    description: 'An enterprise AI platform that automates the end-to-end machine learning process.',
    careersUrl: 'https://www.datarobot.com/careers/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/DataRobot_logo.svg/2560px-DataRobot_logo.svg.png',
    category: 'AI'
  },
  {
    id: 'h2oai',
    name: 'H2O.ai',
    description: 'The open-source leader in AI and machine learning for the enterprise.',
    careersUrl: 'https://h2o.ai/company/careers/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/H2O.ai_logo.svg/2560px-H2O.ai_logo.svg.png',
    category: 'AI'
  },
  {
    id: 'shieldai',
    name: 'Shield AI',
    description: 'Building the world\'s best AI pilot for military and commercial aircraft.',
    careersUrl: 'https://shield.ai/careers/',
    logo: 'https://shield.ai/wp-content/uploads/2021/08/Shield-AI-Logo-Black.svg',
    category: 'AI'
  },
  {
    id: 'waymo',
    name: 'Waymo',
    description: 'A self-driving technology company with a mission to make it safe and easy for people and things to move around.',
    careersUrl: 'https://waymo.com/careers/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Waymo_logo.svg/2560px-Waymo_logo.svg.png',
    category: 'AI'
  },

  // Fintech
  {
    id: 'stripe',
    name: 'Stripe',
    description: 'Financial infrastructure for the internet, helping businesses of all sizes accept payments.',
    careersUrl: 'https://stripe.com/jobs',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg',
    category: 'Fintech'
  },
  {
    id: 'paypal',
    name: 'PayPal',
    description: 'A global leader in digital payments, enabling people and businesses to send and receive money.',
    careersUrl: 'https://www.paypal.com/us/webapps/mpp/jobs',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg',
    category: 'Fintech'
  },
  {
    id: 'block',
    name: 'Block',
    description: 'A global technology company with a focus on financial services, including Square and Cash App.',
    careersUrl: 'https://block.xyz/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Block_Inc._logo.svg/2560px-Block_Inc._logo.svg.png',
    category: 'Fintech'
  },
  {
    id: 'adyen',
    name: 'Adyen',
    description: 'The payments platform of choice for many of the world\'s leading companies.',
    careersUrl: 'https://www.adyen.com/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Adyen_Logo.svg/2560px-Adyen_Logo.svg.png',
    category: 'Fintech'
  },
  {
    id: 'revolut',
    name: 'Revolut',
    description: 'A global financial super-app offering banking, investing, and currency exchange services.',
    careersUrl: 'https://www.revolut.com/careers/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Revolut_logo.svg/2560px-Revolut_logo.svg.png',
    category: 'Fintech'
  },
  {
    id: 'plaid',
    name: 'Plaid',
    description: 'Building the data infrastructure that powers the fintech ecosystem.',
    careersUrl: 'https://plaid.com/careers/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Plaid_logo.svg/2560px-Plaid_logo.svg.png',
    category: 'Fintech'
  },
  {
    id: 'robinhood',
    name: 'Robinhood',
    description: 'Democratizing finance for all through commission-free investing and financial tools.',
    careersUrl: 'https://careers.robinhood.com/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Robinhood_Logo.svg/2560px-Robinhood_Logo.svg.png',
    category: 'Fintech'
  },
  {
    id: 'coinbase',
    name: 'Coinbase',
    description: 'The easiest place to buy and sell cryptocurrency, building the future of the crypto economy.',
    careersUrl: 'https://www.coinbase.com/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Coinbase.svg/2560px-Coinbase.svg.png',
    category: 'Fintech'
  },
  {
    id: 'wise',
    name: 'Wise',
    description: 'A global technology company building the best way to move money around the world.',
    careersUrl: 'https://wise.jobs/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Wise_Logo.svg/2560px-Wise_Logo.svg.png',
    category: 'Fintech'
  },
  {
    id: 'klarna',
    name: 'Klarna',
    description: 'Providing smooth shopping and payment solutions for consumers and merchants.',
    careersUrl: 'https://www.klarna.com/careers/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Klarna_Logo.svg/2560px-Klarna_Logo.svg.png',
    category: 'Fintech'
  },
  {
    id: 'chime',
    name: 'Chime',
    description: 'A financial technology company that believes basic banking services should be helpful, transparent, and free.',
    careersUrl: 'https://www.chime.com/careers/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Chime_logo.svg/2560px-Chime_logo.svg.png',
    category: 'Fintech'
  },
  {
    id: 'affirm',
    name: 'Affirm',
    description: 'Building honest financial products that improve lives through transparent and flexible payments.',
    careersUrl: 'https://www.affirm.com/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Affirm_logo.svg/2560px-Affirm_logo.svg.png',
    category: 'Fintech'
  },
  {
    id: 'sofi',
    name: 'SoFi',
    description: 'A one-stop shop for your finances, helping you get your money right.',
    careersUrl: 'https://www.sofi.com/careers/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/SoFi_logo.svg/2560px-SoFi_logo.svg.png',
    category: 'Fintech'
  },
  {
    id: 'brex',
    name: 'Brex',
    description: 'The AI-powered spend management platform for global companies.',
    careersUrl: 'https://www.brex.com/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Brex_logo.svg/2560px-Brex_logo.svg.png',
    category: 'Fintech'
  },
  {
    id: 'ramp',
    name: 'Ramp',
    description: 'The ultimate corporate card and spend management platform designed to save you time and money.',
    careersUrl: 'https://ramp.com/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Ramp_logo.svg/2560px-Ramp_logo.svg.png',
    category: 'Fintech'
  },

  // Software
  {
    id: 'databricks',
    name: 'Databricks',
    description: 'The data and AI company, pioneering the lakehouse architecture in the cloud.',
    careersUrl: 'https://www.databricks.com/company/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.svg',
    category: 'Software'
  },
  {
    id: 'snowflake',
    name: 'Snowflake',
    description: 'The Data Cloud, enabling every organization to mobilize their data with Snowflake\'s platform.',
    careersUrl: 'https://www.snowflake.com/about/careers/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg',
    category: 'Software'
  },
  {
    id: 'servicenow',
    name: 'ServiceNow',
    description: 'Making the world of work, work better for people with digital workflows.',
    careersUrl: 'https://www.servicenow.com/careers.html',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/ServiceNow_logo.svg/2560px-ServiceNow_logo.svg.png',
    category: 'Software'
  },
  {
    id: 'workday',
    name: 'Workday',
    description: 'A leading provider of enterprise cloud applications for finance and human resources.',
    careersUrl: 'https://www.workday.com/en-us/company/careers.html',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Workday_logo.svg/2560px-Workday_logo.svg.png',
    category: 'Software'
  },
  {
    id: 'atlassian',
    name: 'Atlassian',
    description: 'Helping teams everywhere unleash their potential with tools like Jira and Confluence.',
    careersUrl: 'https://www.atlassian.com/company/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Atlassian_logo.svg/2560px-Atlassian_logo.svg.png',
    category: 'Software'
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    description: 'A leading customer platform that helps businesses grow better.',
    careersUrl: 'https://www.hubspot.com/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HubSpot_Logo.svg/2560px-HubSpot_Logo.svg.png',
    category: 'Software'
  },
  {
    id: 'zoom',
    name: 'Zoom',
    description: 'Providing a frictionless communications platform that brings people together.',
    careersUrl: 'https://careers.zoom.us/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Zoom_Communications_Logo.svg/2560px-Zoom_Communications_Logo.svg.png',
    category: 'Software'
  },
  {
    id: 'twilio',
    name: 'Twilio',
    description: 'The customer engagement platform used by millions of developers to build unique experiences.',
    careersUrl: 'https://www.twilio.com/company/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Twilio-logo-red.svg/2560px-Twilio-logo-red.svg.png',
    category: 'Software'
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    description: 'The leading modern, general-purpose database platform.',
    careersUrl: 'https://www.mongodb.com/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png',
    category: 'Software'
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare',
    description: 'Helping to build a better internet by providing security, performance, and reliability.',
    careersUrl: 'https://www.cloudflare.com/careers/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Cloudflare_Logo.svg/2560px-Cloudflare_Logo.svg.png',
    category: 'Software'
  },
  {
    id: 'hashicorp',
    name: 'HashiCorp',
    description: 'Enabling organizations to adopt a cloud operating model with infrastructure automation.',
    careersUrl: 'https://www.hashicorp.com/jobs',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/HashiCorp_Logo.svg/2560px-HashiCorp_Logo.svg.png',
    category: 'Software'
  },
  {
    id: 'unity',
    name: 'Unity',
    description: 'The world\'s leading platform for creating and operating interactive, real-time 3D content.',
    careersUrl: 'https://unity.com/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Unity_Technologies_logo.svg/2560px-Unity_Technologies_logo.svg.png',
    category: 'Software'
  },
  {
    id: 'autodesk',
    name: 'Autodesk',
    description: 'Changing how the world is designed and made with software for architecture, engineering, and construction.',
    careersUrl: 'https://www.autodesk.com/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Autodesk_logo.svg/2560px-Autodesk_logo.svg.png',
    category: 'Software'
  },
  {
    id: 'intuit',
    name: 'Intuit',
    description: 'The global financial technology platform that powers prosperity for consumers and small businesses.',
    careersUrl: 'https://www.intuit.com/careers/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Intuit_logo.svg/2560px-Intuit_logo.svg.png',
    category: 'Software'
  },
  {
    id: 'palantir',
    name: 'Palantir',
    description: 'Building software that lets organizations integrate their data, their decisions, and their operations.',
    careersUrl: 'https://www.palantir.com/careers/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Palantir_Technologies_logo.svg/2560px-Palantir_Technologies_logo.svg.png',
    category: 'Software'
  },
  {
    id: 'splunk',
    name: 'Splunk',
    description: 'The data platform that helps organizations around the world turn data into doing.',
    careersUrl: 'https://www.splunk.com/en_us/careers.html',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Splunk_logo.svg/2560px-Splunk_logo.svg.png',
    category: 'Software'
  },
  {
    id: 'dynatrace',
    name: 'Dynatrace',
    description: 'Providing software intelligence to simplify cloud complexity and accelerate digital transformation.',
    careersUrl: 'https://www.dynatrace.com/company/careers/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Dynatrace_logo.svg/2560px-Dynatrace_logo.svg.png',
    category: 'Software'
  },
  {
    id: 'okta',
    name: 'Okta',
    description: 'The leading independent identity provider, enabling organizations to securely connect the right people to the right technologies.',
    careersUrl: 'https://www.okta.com/careers/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Okta_logo.svg/2560px-Okta_logo.svg.png',
    category: 'Software'
  },
  {
    id: 'zscaler',
    name: 'Zscaler',
    description: 'Accelerating digital transformation so customers can be agile, efficient, resilient, and secure.',
    careersUrl: 'https://www.zscaler.com/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Zscaler_logo.svg/2560px-Zscaler_logo.svg.png',
    category: 'Software'
  },
  {
    id: 'datadog',
    name: 'Datadog',
    description: 'The monitoring and security platform for cloud applications.',
    careersUrl: 'https://www.datadoghq.com/careers/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Datadog_logo.svg/2560px-Datadog_logo.svg.png',
    category: 'Software'
  },

  // Hardware
  {
    id: 'nvidia',
    name: 'NVIDIA',
    description: 'The world leader in AI computing, known for GPUs and accelerated computing platforms.',
    careersUrl: 'https://www.nvidia.com/en-us/about-nvidia/careers/',
    logo: 'https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg',
    category: 'Hardware'
  },
  {
    id: 'intel',
    name: 'Intel',
    description: 'A world leader in the design and manufacturing of essential technologies that power the cloud and an increasingly smart, connected world.',
    careersUrl: 'https://www.intel.com/content/www/us/en/jobs/locations/united-states.html',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg',
    category: 'Hardware'
  },
  {
    id: 'amd',
    name: 'AMD',
    description: 'Driving innovation in high-performance computing, graphics, and visualization technologies.',
    careersUrl: 'https://www.amd.com/en/corporate/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg',
    category: 'Hardware'
  },
  {
    id: 'tsmc',
    name: 'TSMC',
    description: 'The world\'s largest dedicated independent semiconductor foundry.',
    careersUrl: 'https://www.tsmc.com/static/english/careers/index.htm',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/TSMC_logo.svg/2560px-TSMC_logo.svg.png',
    category: 'Hardware'
  },
  {
    id: 'qualcomm',
    name: 'Qualcomm',
    description: 'The world\'s leading wireless technology innovator and the driving force behind the development, launch, and expansion of 5G.',
    careersUrl: 'https://www.qualcomm.com/company/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Qualcomm_logo.svg/2560px-Qualcomm_logo.svg.png',
    category: 'Hardware'
  },
  {
    id: 'asml',
    name: 'ASML',
    description: 'The world\'s leading supplier to the semiconductor industry, providing chipmakers with hardware, software, and services.',
    careersUrl: 'https://www.asml.com/en/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/ASML_Logo.svg/2560px-ASML_Logo.svg.png',
    category: 'Hardware'
  },
  {
    id: 'broadcom',
    name: 'Broadcom',
    description: 'A global technology leader that designs, develops, and supplies a broad range of semiconductor and infrastructure software solutions.',
    careersUrl: 'https://www.broadcom.com/company/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Broadcom_Logo.svg/2560px-Broadcom_Logo.svg.png',
    category: 'Hardware'
  },
  {
    id: 'micron',
    name: 'Micron',
    description: 'An industry leader in innovative memory and storage solutions.',
    careersUrl: 'https://www.micron.com/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Micron_Technology_logo.svg/2560px-Micron_Technology_logo.svg.png',
    category: 'Hardware'
  },
  {
    id: 'arm',
    name: 'Arm',
    description: 'The world\'s leading semiconductor IP company, with billions of people using Arm-based chips.',
    careersUrl: 'https://www.arm.com/company/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/ARM_logo.svg/2560px-ARM_logo.svg.png',
    category: 'Hardware'
  },
  {
    id: 'appliedmaterials',
    name: 'Applied Materials',
    description: 'The leader in materials engineering solutions used to produce virtually every new chip and advanced display in the world.',
    careersUrl: 'https://www.appliedmaterials.com/company/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Applied_Materials_logo.svg/2560px-Applied_Materials_logo.svg.png',
    category: 'Hardware'
  },
  {
    id: 'lamresearch',
    name: 'Lam Research',
    description: 'A global supplier of innovative wafer fabrication equipment and services to the semiconductor industry.',
    careersUrl: 'https://www.lamresearch.com/company/careers/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Lam_Research_logo.svg/2560px-Lam_Research_logo.svg.png',
    category: 'Hardware'
  },
  {
    id: 'marvell',
    name: 'Marvell',
    description: 'Delivering the essential technology for the data infrastructure of tomorrow.',
    careersUrl: 'https://www.marvell.com/company/careers.html',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Marvell_Logo.svg/2560px-Marvell_Logo.svg.png',
    category: 'Hardware'
  },
  {
    id: 'westerndigital',
    name: 'Western Digital',
    description: 'A leading developer, manufacturer, and provider of data storage solutions.',
    careersUrl: 'https://careers.smartrecruiters.com/WesternDigital',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Western_Digital_logo.svg/2560px-Western_Digital_logo.svg.png',
    category: 'Hardware'
  },
  {
    id: 'seagate',
    name: 'Seagate',
    description: 'A world leader in data storage solutions, developing amazing products that enable people and businesses to create, share, and preserve their most critical memories and business data.',
    careersUrl: 'https://www.seagate.com/jobs/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Seagate_Logo.svg/2560px-Seagate_Logo.svg.png',
    category: 'Hardware'
  },
  {
    id: 'tesla_hardware',
    name: 'Tesla (Hardware)',
    description: 'Designing and building the next generation of robotics and AI hardware.',
    careersUrl: 'https://www.tesla.com/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg',
    category: 'Hardware'
  },

  // More Tech/Internet
  {
    id: 'uber',
    name: 'Uber',
    description: 'Igniting opportunity by setting the world in motion.',
    careersUrl: 'https://www.uber.com/us/en/careers/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png',
    category: 'Software'
  },
  {
    id: 'airbnb',
    name: 'Airbnb',
    description: 'A community-based platform for listing, discovering, and booking unique accommodations around the world.',
    careersUrl: 'https://www.airbnb.com/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png',
    category: 'Software'
  },
  {
    id: 'spotify',
    name: 'Spotify',
    description: 'A digital music, podcast, and video service that gives you access to millions of songs and other content.',
    careersUrl: 'https://www.lifeatspotify.com/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_with_text.svg/2560px-Spotify_logo_with_text.svg.png',
    category: 'Software'
  },
  {
    id: 'pinterest',
    name: 'Pinterest',
    description: 'A visual discovery engine for finding ideas like recipes, home and style inspiration, and more.',
    careersUrl: 'https://www.pinterestcareers.com/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pinterest-logo.svg/2560px-Pinterest-logo.svg.png',
    category: 'Software'
  },
  {
    id: 'snap',
    name: 'Snap Inc.',
    description: 'A camera company that believes that reinventing the camera represents our greatest opportunity to improve the way people live and communicate.',
    careersUrl: 'https://www.snap.com/en-US/jobs',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Snap_Inc._logo.svg/2560px-Snap_Inc._logo.svg.png',
    category: 'Software'
  },
  {
    id: 'doordash',
    name: 'DoorDash',
    description: 'A technology company that connects people with the best in their cities.',
    careersUrl: 'https://careers.doordash.com/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/DoorDash_Logo.svg/2560px-DoorDash_Logo.svg.png',
    category: 'Software'
  },
  {
    id: 'instacart',
    name: 'Instacart',
    description: 'The leading grocery technology company in North America.',
    careersUrl: 'https://instacart.careers/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Instacart_logo.svg/2560px-Instacart_logo.svg.png',
    category: 'Software'
  },
  {
    id: 'lyft',
    name: 'Lyft',
    description: 'A transportation network company that offers mobility as a service, ride-hailing, and more.',
    careersUrl: 'https://www.lyft.com/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lyft_logo.svg/2560px-Lyft_logo.svg.png',
    category: 'Software'
  },
  {
    id: 'reddit',
    name: 'Reddit',
    description: 'A network of communities where people can dive into their interests, hobbies, and passions.',
    careersUrl: 'https://www.redditinc.com/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Reddit_logo_new.svg/2560px-Reddit_logo_new.svg.png',
    category: 'Software'
  },
  {
    id: 'discord',
    name: 'Discord',
    description: 'The easiest way to talk over voice, video, and text.',
    careersUrl: 'https://discord.com/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Discord_Color_Text_Logo.svg/2560px-Discord_Color_Text_Logo.svg.png',
    category: 'Software'
  },
  {
    id: 'bytedance',
    name: 'ByteDance',
    description: 'A global technology company operating a range of content platforms that inform, educate, entertain, and inspire people.',
    careersUrl: 'https://jobs.bytedance.com/en/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/ByteDance_logo.svg/2560px-ByteDance_logo.svg.png',
    category: 'Software'
  },
  {
    id: 'shopify',
    name: 'Shopify',
    description: 'The global commerce platform that helps you build, grow, and manage your business.',
    careersUrl: 'https://www.shopify.com/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png',
    category: 'Software'
  },
  {
    id: 'wix',
    name: 'Wix',
    description: 'A leading cloud-based development platform with millions of users worldwide.',
    careersUrl: 'https://www.wix.com/jobs',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Wix.com_website_logo.svg/2560px-Wix.com_website_logo.svg.png',
    category: 'Software'
  },
  {
    id: 'squarespace',
    name: 'Squarespace',
    description: 'An all-in-one platform for anyone looking to create a beautiful website.',
    careersUrl: 'https://www.squarespace.com/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Squarespace_logo.svg/2560px-Squarespace_logo.svg.png',
    category: 'Software'
  },
  {
    id: 'zoominfo',
    name: 'ZoomInfo',
    description: 'A leader in modern go-to-market software, data, and intelligence.',
    careersUrl: 'https://www.zoominfo.com/about/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/ZoomInfo_logo.svg/2560px-ZoomInfo_logo.svg.png',
    category: 'Software'
  },

  // Emerging/Specialized
  {
    id: 'spacex',
    name: 'SpaceX',
    description: 'Designing, manufacturing, and launching advanced rockets and spacecraft.',
    careersUrl: 'https://www.spacex.com/careers/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/SpaceX_logo_black.svg/2560px-SpaceX_logo_black.svg.png',
    category: 'Hardware'
  },
  {
    id: 'blueorigin',
    name: 'Blue Origin',
    description: 'Developing technologies to enable human access to space with the goal of dramatically lower costs.',
    careersUrl: 'https://www.blueorigin.com/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Blue_Origin_logo.svg/2560px-Blue_Origin_logo.svg.png',
    category: 'Hardware'
  },
  {
    id: 'anduril',
    name: 'Anduril',
    description: 'A defense technology company that builds next-generation software and hardware capabilities for the military.',
    careersUrl: 'https://www.anduril.com/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Anduril_Industries_logo.svg/2560px-Anduril_Industries_logo.svg.png',
    category: 'Hardware'
  },
  {
    id: 'rivian',
    name: 'Rivian',
    description: 'An electric vehicle manufacturer and automotive technology company.',
    careersUrl: 'https://rivian.com/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Rivian_logo.svg/2560px-Rivian_logo.svg.png',
    category: 'Hardware'
  },
  {
    id: 'lucid',
    name: 'Lucid Motors',
    description: 'Setting new standards for sustainable mobility with luxury electric vehicles.',
    careersUrl: 'https://www.lucidmotors.com/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Lucid_Motors_logo.svg/2560px-Lucid_Motors_logo.svg.png',
    category: 'Hardware'
  },
  {
    id: 'cruise',
    name: 'Cruise',
    description: 'Building the world\'s most advanced self-driving vehicles to safely connect people with the places, things, and experiences they care about.',
    careersUrl: 'https://getcruise.com/careers/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Cruise_logo.svg/2560px-Cruise_logo.svg.png',
    category: 'AI'
  },
  {
    id: 'aurora',
    name: 'Aurora',
    description: 'Delivering the benefits of self-driving technology safely, quickly, and broadly.',
    careersUrl: 'https://aurora.tech/careers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Aurora_Innovation_logo.svg/2560px-Aurora_Innovation_logo.svg.png',
    category: 'AI'
  },
  {
    id: 'stripe_fintech',
    name: 'Stripe (Fintech)',
    description: 'Expanding the GDP of the internet through innovative payment solutions.',
    careersUrl: 'https://stripe.com/jobs',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg',
    category: 'Fintech'
  },
  {
    id: 'plaid_fintech',
    name: 'Plaid (Fintech)',
    description: 'Powering the next generation of financial services.',
    careersUrl: 'https://plaid.com/careers/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Plaid_logo.svg/2560px-Plaid_logo.svg.png',
    category: 'Fintech'
  },
  {
    id: 'revolut_fintech',
    name: 'Revolut (Fintech)',
    description: 'The global financial super-app for all things money.',
    careersUrl: 'https://www.revolut.com/careers/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Revolut_logo.svg/2560px-Revolut_logo.svg.png',
    category: 'Fintech'
  }
];
