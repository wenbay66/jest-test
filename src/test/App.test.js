import { render, screen, fireEvent } from '@testing-library/react';
import App from '../pages/App';

test('按鈕顏色檢查', () => {
  render(<App />);

  const colorButton = screen.getByTestId('testBtn');

  // toXX   =>   https://github.com/testing-library/jest-dom
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  // 測試點擊前按鈕文字是否正確
  expect(colorButton.textContent).toBe('Change to blue');

  // 測試點擊按鈕前背景是不是紅色
  expect(colorButton).toHaveStyle({ background: 'red' });

  // 點擊按鈕
  fireEvent.click(colorButton);

  // 測試按鈕點擊後背景是否有變成藍色
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  // 測試點擊後按鈕文字是否正確
  expect(colorButton.textContent).toBe('Change to red');
});

test('第一次點擊 CheckBox 後禁用 button, 第二次點擊後啟用 button', () => {
  render(<App />);

  const colorButton = screen.getByTestId('testBtn');
  const checkBox = screen.getByTestId('testCheckBox');

  // 第一次點擊 checkbox 後按鈕被 disabled
  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled();


  // 第二次點擊 checkbox 後按鈕被 enabled
  fireEvent.click(checkBox);
  expect(colorButton).toBeEnabled();

})
