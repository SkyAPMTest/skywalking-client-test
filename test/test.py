import os
import time

from selenium import webdriver as wd
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities as DC

hub_remote_url = os.environ.get("HUB_REMOTE_URL", "http://selenium-hub:4444/wd/hub")
test_url = os.environ.get("TEST_URL", "http://test-ui:80/")


def test_screenshot():
    try:
        driver.get(test_url)
    except Exception as e:
        print(e)


try:
    driver = wd.Remote(
        command_executor=hub_remote_url,
        desired_capabilities=DC.CHROME)

    while True:
        test_screenshot()
        time.sleep(30)

finally:
    driver.quit()
