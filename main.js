import * as slugid from 'slugid';

// DOM Elements
const uuidInput = document.getElementById('uuid-input');
const slugOutput = document.getElementById('slug-output');
const encodeBtn = document.getElementById('encode-btn');

const slugInput = document.getElementById('slug-input');
const uuidOutput = document.getElementById('uuid-output');
const decodeBtn = document.getElementById('decode-btn');

const generateV4Btn = document.getElementById('generate-v4-btn');
const generateNiceBtn = document.getElementById('generate-nice-btn');
const generatedSlug = document.getElementById('generated-slug');
const generatedUuid = document.getElementById('generated-uuid');

const errorMessage = document.getElementById('error-message');

// Utility functions
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.add('visible');
  setTimeout(() => {
    errorMessage.classList.remove('visible');
  }, 5000);
}

function hideError() {
  errorMessage.classList.remove('visible');
}

function isValidUuid(uuid) {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
}

function isValidSlug(slug) {
  const slugRegex = /^[A-Za-z0-9_-]{22}$/;
  return slugRegex.test(slug);
}

// Event handlers
encodeBtn.addEventListener('click', () => {
  hideError();
  const uuid = uuidInput.value.trim();
  
  if (!uuid) {
    showError('Please enter a UUID');
    return;
  }
  
  if (!isValidUuid(uuid)) {
    showError('Invalid UUID format. Expected: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
    return;
  }
  
  try {
    const slug = slugid.encode(uuid);
    slugOutput.value = slug;
  } catch (err) {
    showError(`Error encoding UUID: ${err.message}`);
  }
});

decodeBtn.addEventListener('click', () => {
  hideError();
  const slug = slugInput.value.trim();
  
  if (!slug) {
    showError('Please enter a SlugID');
    return;
  }
  
  if (!isValidSlug(slug)) {
    showError('Invalid SlugID format. Expected: 22 characters [A-Za-z0-9_-]');
    return;
  }
  
  try {
    const uuid = slugid.decode(slug);
    uuidOutput.value = uuid;
  } catch (err) {
    showError(`Error decoding SlugID: ${err.message}`);
  }
});

generateV4Btn.addEventListener('click', () => {
  hideError();
  try {
    const slug = slugid.v4();
    const uuid = slugid.decode(slug);
    generatedSlug.value = slug;
    generatedUuid.value = uuid;
  } catch (err) {
    showError(`Error generating SlugID: ${err.message}`);
  }
});

generateNiceBtn.addEventListener('click', () => {
  hideError();
  try {
    const slug = slugid.nice();
    const uuid = slugid.decode(slug);
    generatedSlug.value = slug;
    generatedUuid.value = uuid;
  } catch (err) {
    showError(`Error generating SlugID: ${err.message}`);
  }
});

// Allow Enter key to trigger encode/decode
uuidInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    encodeBtn.click();
  }
});

slugInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    decodeBtn.click();
  }
});
